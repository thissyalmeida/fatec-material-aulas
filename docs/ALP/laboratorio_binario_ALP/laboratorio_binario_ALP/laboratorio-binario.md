## Laboratório interativo: sistema binário

No sistema binário, cada posição corresponde a uma potência de 2. Para converter
um número para decimal, multiplicamos cada bit pela potência correspondente e somamos
as parcelas.

<div class="lab-binario" id="lab-binario">
  <section class="lab-card">
    <h3>1. Experimente o conversor</h3>
    <p>Digite de 1 a 8 bits, utilizando somente 0 e 1.</p>
    <div class="lab-controls">
      <label for="lab-bin-input">Número binário</label>
      <input id="lab-bin-input" type="text" inputmode="numeric" maxlength="8" value="1011">
      <button type="button" id="lab-bin-convert">Converter</button>
    </div>
    <p class="lab-help">Exemplo: <code>1011</code> corresponde a 11 em decimal.</p>
    <p class="lab-result">Resultado decimal: <strong id="lab-bin-result" aria-live="polite">11</strong></p>
    <p id="lab-bin-message" class="lab-message" role="status"></p>
    <div class="lab-table-wrap">
      <table class="lab-table">
        <thead><tr><th>Bit</th><th>Posição</th><th>Potência de 2</th><th>Parcela</th></tr></thead>
        <tbody id="lab-bin-steps"></tbody>
      </table>
    </div>
    <p class="lab-equation">Soma das parcelas: <strong id="lab-bin-equation">--</strong></p>
  </section>
  <section class="lab-card">
    <h3>2. Desafio do programador</h3>
    <p>Converta o número binário abaixo para decimal.</p>
    <div class="lab-challenge-number" id="lab-challenge-number" aria-live="polite">1101</div>
    <div class="lab-controls">
      <label for="lab-challenge-answer">Sua resposta decimal</label>
      <input id="lab-challenge-answer" type="number" min="0" max="255" step="1" inputmode="numeric">
      <button type="button" id="lab-challenge-check">Conferir resposta</button>
      <button type="button" id="lab-challenge-new" class="lab-secondary">Novo desafio</button>
    </div>
    <p id="lab-challenge-feedback" class="lab-message" role="status" aria-live="polite"></p>
    <p class="lab-score">Pontuação: <strong id="lab-challenge-score">0</strong> acertos</p>
    <button type="button" id="lab-challenge-show" class="lab-text-button">Mostrar resposta e explicação</button>
    <div id="lab-challenge-explanation" class="lab-explanation" hidden></div>
  </section>
</div>

**Dica:** comece pela posição mais à direita, que corresponde a \(2^0 = 1\). A cada posição para a esquerda, a potência de 2 aumenta.
