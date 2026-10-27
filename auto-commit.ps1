<#!
.SYNOPSIS
    Cria commits locais automáticos quando há alterações no repositório.

.DESCRIPTION
    Monitora o diretório do repositório e aguarda alguns segundos sem novas
    alterações antes de executar "git add --all", "git commit" e "git push".
    Use -NoPush para criar somente commits locais.

.EXAMPLE
    .\auto-commit.ps1

.EXAMPLE
    .\auto-commit.ps1 -DebounceSeconds 10

.EXAMPLE
    .\auto-commit.ps1 -NoPush
#>
[CmdletBinding()]
param(
    [ValidateRange(1, 300)]
    [int]$DebounceSeconds = 5,

    [string]$RepositoryPath,

    [switch]$NoPush
)

$ErrorActionPreference = 'Stop'
if ([string]::IsNullOrWhiteSpace($RepositoryPath)) {
    $RepositoryPath = $PSScriptRoot
}
$RepositoryPath = (Resolve-Path -LiteralPath $RepositoryPath).Path
$gitDirectory = Join-Path $RepositoryPath '.git'

if (-not (Test-Path -LiteralPath $gitDirectory)) {
    throw "Nenhum repositório Git foi encontrado em '$RepositoryPath'."
}

if (-not $NoPush) {
    $upstream = & git -C $RepositoryPath rev-parse --abbrev-ref --symbolic-full-name '@{upstream}' 2>$null
    if ($LASTEXITCODE -ne 0) {
        throw 'O ramo atual não possui um remoto de acompanhamento. Configure-o ou execute o script com -NoPush.'
    }
}

function Invoke-AutoCommit {
    $changes = & git -C $RepositoryPath status --porcelain
    if ($LASTEXITCODE -ne 0) {
        throw 'Não foi possível verificar o estado do Git.'
    }

    if (-not $changes) {
        return
    }

    & git -C $RepositoryPath add --all
    if ($LASTEXITCODE -ne 0) {
        throw 'Não foi possível preparar as alterações para o commit.'
    }

    & git -C $RepositoryPath diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        return
    }
    if ($LASTEXITCODE -ne 1) {
        throw 'Não foi possível verificar as alterações preparadas.'
    }

    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    & git -C $RepositoryPath commit -m "chore: salvamento automático ($timestamp)"
    if ($LASTEXITCODE -ne 0) {
        throw 'O Git não conseguiu criar o commit.'
    }

    Write-Host "[$timestamp] Commit automático criado." -ForegroundColor Green

    if (-not $NoPush) {
        & git -C $RepositoryPath push
        if ($LASTEXITCODE -ne 0) {
            throw 'O commit local foi criado, mas não foi possível enviá-lo ao remoto.'
        }

        Write-Host "[$timestamp] Alterações enviadas ao remoto ($upstream)." -ForegroundColor Green
    }
}

$watcher = [System.IO.FileSystemWatcher]::new($RepositoryPath)
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]'FileName, DirectoryName, LastWrite, Size'
$watcher.EnableRaisingEvents = $true

$eventPrefix = 'AutoCommitWatcher'
$subscriptions = @(
    Register-ObjectEvent -InputObject $watcher -EventName Changed -SourceIdentifier "$eventPrefix.Changed"
    Register-ObjectEvent -InputObject $watcher -EventName Created -SourceIdentifier "$eventPrefix.Created"
    Register-ObjectEvent -InputObject $watcher -EventName Deleted -SourceIdentifier "$eventPrefix.Deleted"
    Register-ObjectEvent -InputObject $watcher -EventName Renamed -SourceIdentifier "$eventPrefix.Renamed"
)

Write-Host "Monitorando '$RepositoryPath'. Pressione Ctrl+C para encerrar." -ForegroundColor Cyan
Write-Host "Commits serão criados após $DebounceSeconds segundos sem novas alterações."

$lastChange = $null
try {
    while ($true) {
        $events = @(Get-Event | Where-Object { $_.SourceIdentifier -like "$eventPrefix.*" })
        foreach ($event in $events) {
            Remove-Event -EventIdentifier $event.EventIdentifier

            $changedPath = $event.SourceEventArgs.FullPath
            if (-not $changedPath.StartsWith($gitDirectory, [System.StringComparison]::OrdinalIgnoreCase)) {
                $lastChange = Get-Date
            }
        }

        if ($lastChange -and ((Get-Date) - $lastChange).TotalSeconds -ge $DebounceSeconds) {
            try {
                Invoke-AutoCommit
            }
            catch {
                Write-Warning $_.Exception.Message
            }
            finally {
                $lastChange = $null
            }
        }

        Start-Sleep -Milliseconds 500
    }
}
finally {
    foreach ($subscription in $subscriptions) {
        Unregister-Event -SubscriptionId $subscription.Id -ErrorAction SilentlyContinue
    }
    $watcher.Dispose()
}
