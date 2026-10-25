# Apostila ALP — pacote revisado

## O que foi ajustado
- Padronização das variáveis de tema e do banner para o vermelho institucional `#B31010`.
- Regras de contraste do banner e foco visível nos botões.
- Remoção do título H1 externo duplicado na página inicial; o título do banner passa a ser o H1 principal.
- Normalização do nome do arquivo do capítulo 5 para coincidir com o caminho declarado no `mkdocs.yml`.
- Inclusão de `docs/javascripts/mermaid-init.js`, arquivo referenciado pela configuração.
- Preservação do conteúdo textual dos 12 capítulos e dos componentes pedagógicos já existentes.

## Estrutura
- `mkdocs.yml`
- `docs/ALP/apostila/index.md`
- `docs/ALP/apostila/01-...md` até `12-...md`
- `docs/assets/stylesheets/style.css`
- `docs/javascripts/mermaid-init.js`

## Teste local
Instale MkDocs, Material for MkDocs e extensões PyMdown utilizadas pela configuração. Depois execute:

```powershell
py -m mkdocs build --strict
py -m mkdocs serve
```

A compilação não foi executada neste ambiente porque os pacotes `mkdocs`, `mkdocs-material` e `pymdown-extensions` não estão instalados. Portanto, o pacote ainda deve passar pelo build local antes do deploy.

## Observações da revisão
- O YAML fornecido declara `site_url` na raiz do site, compatível com GitHub Pages do repositório, desde que o workflow publique a pasta gerada de `site/`.
- Os links entre capítulos usam caminhos relativos; devem ser validados pelo build estrito.
- O CSS estiliza admonitions reais (`!!! abstract`, `!!! example`, `!!! warning`, `!!! tip`, `!!! success`). Títulos Markdown comuns não viram caixas automaticamente.
- O conteúdo didático foi preservado; a revisão editorial de precisão conceitual de cada exercício/gabarito é uma etapa separada da revisão visual/técnica.
