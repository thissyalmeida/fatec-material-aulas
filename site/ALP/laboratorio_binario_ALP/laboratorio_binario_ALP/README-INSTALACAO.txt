LABORATÓRIO DE CONVERSÃO BINÁRIA — MkDocs Material
=================================================

1. Copie a pasta assets/ deste pacote para docs/assets/ no seu projeto.
   Caminhos finais:
   docs/assets/stylesheets/laboratorio-binario.css
   docs/assets/javascripts/laboratorio-binario.js

2. No mkdocs.yml, acrescente às listas existentes (não crie seções duplicadas):

   extra_css:
     - assets/stylesheets/laboratorio-binario.css

   extra_javascript:
     - assets/javascripts/laboratorio-binario.js

   Preserve as demais linhas já existentes, incluindo os arquivos do Mermaid.

3. Copie o conteúdo de laboratorio-binario.md para o capítulo 11 da apostila.

4. Teste com: py -m mkdocs serve
   Depois: py -m mkdocs build
   Publique usando seu procedimento habitual, por exemplo: atualizar-portal

O laboratório inclui conversor com tabela explicativa, destaque dos bits 1,
desafio aleatório com feedback, explicação e pontuação. Usa HTML, CSS e JavaScript
nativos, sem frameworks adicionais.
