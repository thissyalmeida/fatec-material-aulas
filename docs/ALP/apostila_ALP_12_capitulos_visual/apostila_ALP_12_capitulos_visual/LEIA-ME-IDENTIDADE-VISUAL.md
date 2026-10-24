# Integração do padrão visual da Apostila de ALP

## 1. Copie os arquivos
Copie os arquivos Markdown para `docs/ALP/apostila/` e a pasta `assets/` para `docs/assets/`. O CSS deve ficar em `docs/assets/stylesheets/style.css`.

## 2. Ative o CSS no `mkdocs.yml`
Acrescente no nível principal do arquivo:

```yaml
extra_css:
  - assets/stylesheets/style.css
```

Se `extra_css` já existir, acrescente o caminho à lista existente em vez de criar uma segunda chave.

## 3. Confirme as extensões Markdown
Dentro de `markdown.extensions`, confirme `admonition`, `pymdownx.details` e `pymdownx.superfences`. Para os diagramas Mermaid, mantenha a configuração que já funciona no portal; evite duplicar extensões existentes.

## 4. Teste e publique
No PowerShell, dentro da pasta do projeto:

```powershell
py -m mkdocs build --strict
```

Se a compilação estiver correta, execute seu fluxo habitual `atualizar-portal`.

## O que a folha de estilos muda
- títulos com linha vermelha e subtítulos com marcador lateral;
- tabelas com cabeçalho escuro, linhas alternadas e destaque ao passar o cursor;
- blocos de código com borda vermelha;
- caixas de atenção, dica e exemplo estilizadas quando a sintaxe de admonition for usada;
- diagramas Mermaid em contêiner responsivo;
- links, listas, navegação e rodapé com detalhes vermelhos;
- ajustes para telas menores e tema claro/escuro.

**Atenção:** o CSS é global e também pode alterar a aparência de outras páginas do portal. Revise o site completo antes de publicar.
