<#!
.SYNOPSIS
    Faz commit, push, build e publicação automáticos do portal MkDocs.

.DESCRIPTION
    Monitora os arquivos-fonte do repositório. Após alguns segundos sem novas
    alterações, cria um commit, envia-o ao remoto, executa o build do MkDocs e
    publica o portal com "py -m mkdocs gh-deploy". O servidor local do MkDocs é
    iniciado uma única vez, evitando uma nova janela a cada salvamento.

.EXAMPLE
    powershell -NoProfile -ExecutionPolicy Bypass -File .\atualizar-portal-automatico.ps1
#>
[CmdletBinding()]
param(
    [ValidateRange(1, 300)]
    [int]$DebounceSeconds = 5,

    [string]$RepositoryPath
)

$ErrorActionPreference = 'Stop'
if ([string]::IsNullOrWhiteSpace($RepositoryPath)) {
    $RepositoryPath = $PSScriptRoot
}
$RepositoryPath = (Resolve-Path -LiteralPath $RepositoryPath).Path
$gitDirectory = Join-Path $RepositoryPath '.git'
$siteDirectory = Join-Path $RepositoryPath 'site'

if (-not (Test-Path -LiteralPath $gitDirectory)) {
    throw "Nenhum repositório Git foi encontrado em '$RepositoryPath'."
}

$upstream = & git -C $RepositoryPath rev-parse --abbrev-ref --symbolic-full-name '@{upstream}' 2>$null
if ($LASTEXITCODE -ne 0) {
    throw 'O ramo atual não possui um remoto de acompanhamento.'
}

$script:mkdocsServerStarted = $false
$ignoredPaths = @($gitDirectory, $siteDirectory)

function Test-IgnoredPath {
    param([string]$Path)

    foreach ($ignoredPath in $ignoredPaths) {
        if ($Path.Equals($ignoredPath, [System.StringComparison]::OrdinalIgnoreCase) -or
            $Path.StartsWith("$ignoredPath\", [System.StringComparison]::OrdinalIgnoreCase)) {
            return $true
        }
    }

    return $false
}

function Invoke-GitCommitAndPush {
    param([string]$Message)

    $changes = & git -C $RepositoryPath status --porcelain
    if ($LASTEXITCODE -ne 0) {
        throw 'Não foi possível verificar o estado do Git.'
    }
    if (-not $changes) {
        return $false
    }

    & git -C $RepositoryPath add --all
    if ($LASTEXITCODE -ne 0) {
        throw 'Não foi possível preparar as alterações para o commit.'
    }

    & git -C $RepositoryPath diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        return $false
    }
    if ($LASTEXITCODE -ne 1) {
        throw 'Não foi possível verificar as alterações preparadas.'
    }

    & git -C $RepositoryPath commit -m $Message
    if ($LASTEXITCODE -ne 0) {
        throw 'O Git não conseguiu criar o commit.'
    }

    & git -C $RepositoryPath push
    if ($LASTEXITCODE -ne 0) {
        throw 'O commit local foi criado, mas não foi possível enviá-lo ao remoto.'
    }

    Write-Host "Alterações enviadas ao remoto ($upstream)." -ForegroundColor Green
    return $true
}

function Start-MkDocsServer {
    if ($script:mkdocsServerStarted) {
        return
    }

    Start-Process -FilePath 'powershell' -WorkingDirectory $RepositoryPath -ArgumentList '-NoExit', '-Command', 'py -m mkdocs serve'
    $script:mkdocsServerStarted = $true
    Write-Host 'Servidor local do MkDocs iniciado em uma nova janela.' -ForegroundColor Cyan
}

function atualizar-portal {
    Start-MkDocsServer

    & py -m mkdocs build
    if ($LASTEXITCODE -ne 0) {
        throw 'A compilação do MkDocs falhou; a publicação foi cancelada.'
    }

    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    [void](Invoke-GitCommitAndPush -Message "chore: atualização do portal ($timestamp)")

    & py -m mkdocs gh-deploy
    if ($LASTEXITCODE -ne 0) {
        throw 'Não foi possível publicar o portal com MkDocs.'
    }

    Write-Host 'Portal publicado com sucesso.' -ForegroundColor Green
}

$watcher = [System.IO.FileSystemWatcher]::new($RepositoryPath)
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]'FileName, DirectoryName, LastWrite, Size'
$watcher.EnableRaisingEvents = $true

$eventPrefix = 'PortalAutoUpdateWatcher'
$subscriptions = @(
    Register-ObjectEvent -InputObject $watcher -EventName Changed -SourceIdentifier "$eventPrefix.Changed"
    Register-ObjectEvent -InputObject $watcher -EventName Created -SourceIdentifier "$eventPrefix.Created"
    Register-ObjectEvent -InputObject $watcher -EventName Deleted -SourceIdentifier "$eventPrefix.Deleted"
    Register-ObjectEvent -InputObject $watcher -EventName Renamed -SourceIdentifier "$eventPrefix.Renamed"
)

Write-Host "Monitorando '$RepositoryPath'. Pressione Ctrl+C para encerrar." -ForegroundColor Cyan
Write-Host "Após $DebounceSeconds segundos sem novas alterações: commit, push, build e publicação."

$lastChange = $null
try {
    while ($true) {
        $events = @(Get-Event | Where-Object { $_.SourceIdentifier -like "$eventPrefix.*" })
        foreach ($event in $events) {
            Remove-Event -EventIdentifier $event.EventIdentifier
            if (-not (Test-IgnoredPath -Path $event.SourceEventArgs.FullPath)) {
                $lastChange = Get-Date
            }
        }

        if ($lastChange -and ((Get-Date) - $lastChange).TotalSeconds -ge $DebounceSeconds) {
            try {
                $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
                if (Invoke-GitCommitAndPush -Message "chore: salvamento automático ($timestamp)") {
                    atualizar-portal
                }
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
