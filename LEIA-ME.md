# Integração da apostila ALP ao portal existente

Este pacote contém arquivos para copiar para o repositório `fatec-material-aulas`. Ele não substitui o repositório inteiro.

## Arquivos incluídos
- `mkdocs.yml` — configuração atualizada com a seção da apostila, Capítulo 1 e suporte a Mermaid.
- `docs/index.md` — página inicial revisada do portal.
- `docs/assets/stylesheets/style.css` — CSS complementar.
- `docs/ALP/apostila/index.md` — apresentação da apostila.
- `docs/ALP/apostila/capitulos/01-introducao-computacao.md` — Capítulo 1, separado das diretrizes editoriais.
- `docs/javascripts/mermaid-init.js` — inicialização dos diagramas Mermaid.

## Como aplicar
1. Faça backup dos arquivos correspondentes no seu repositório.
2. Copie os arquivos mantendo os caminhos e mesclando com as pastas existentes. Não apague outras pastas ou conteúdos.
3. Confira se os caminhos das páginas antigas no `mkdocs.yml` existem na pasta `docs`.
4. Na raiz do projeto, execute `mkdocs serve` e confira a página inicial, a apostila e os diagramas.
5. Execute `mkdocs build` antes de publicar.

**Importante:** a configuração inclui o menu existente conforme o arquivo compartilhado nesta conversa. Como não foi feita leitura direta de todo o repositório local, valide os caminhos das aulas já existentes antes de substituir o arquivo de configuração.
