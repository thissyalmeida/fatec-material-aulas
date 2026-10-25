# 11. Memória e Sistema Binário

## Abertura

Computadores representam informações por estados físicos que podem ser modelados como bits. Compreender binário, bytes, endereços e representação de dados ajuda a entender limites de tipos, ponteiros e erros de memória.

!!! abstract "Objetivos de aprendizagem"

    - converter números inteiros positivos entre decimal e binário;
    - reconhecer bit, byte e sistema hexadecimal;
    - compreender memória e endereçamento em nível introdutório;
    - relacionar tipos de dados a representações e limites;
    - reconhecer riscos de acesso indevido à memória.

## 11.1 Bit e byte

- **Bit:** unidade binária, com dois estados representados como 0 e 1.
- **Byte:** unidade de armazenamento composta, nas plataformas C modernas comuns, por 8 bits; formalmente, C define byte como unidade de armazenamento de `sizeof(char)`, e `CHAR_BIT` informa quantos bits possui.
- **Endereço:** identificador usado para localizar um objeto na memória durante a execução.

## Laboratório: simulador de memória

Modelo didático: cada célula representa 1 byte e cada endereço identifica uma célula. Não é uma simulação da memória física real.

<div class="lab-alp" id="lab-memoria"><section class="lab-card"><h3>Explorador de endereços</h3>
<label for="mem-size">Quantidade de células</label><select id="mem-size"><option value="8">8 bytes</option><option value="16">16 bytes</option><option value="24">24 bytes</option><option value="32">32 bytes</option></select>
<label for="mem-base">Endereço inicial</label><input id="mem-base" type="number" min="0" value="1000">
<p>Células: <strong id="mem-count">8</strong> · Capacidade: <strong id="mem-bits">64</strong> bits</p><p>Intervalo de endereços: <strong id="mem-range">1000 a 1007</strong></p>
<div class="memory-grid" id="mem-grid"></div><p class="lab-muted">Clique em uma célula para consultar seu endereço. Os valores 0/1 são ilustrativos.</p><p id="mem-detail" class="lab-step" role="status">Selecione uma célula.</p></section></div>


## 11.2 Conversão decimal para binário

Divida repetidamente o número por 2 e anote os restos. Leia os restos de baixo para cima.

Exemplo: 13 decimal.

| Divisão | Quociente | Resto |
|---|---:|---:|
| 13 / 2 | 6 | 1 |
| 6 / 2 | 3 | 0 |
| 3 / 2 | 1 | 1 |
| 1 / 2 | 0 | 1 |

## Laboratório: decimal para binário

Para converter um inteiro decimal em binário, divida sucessivamente por 2 até o quociente ser 0. O número binário é formado pelos restos lidos de baixo para cima.

<div class="lab-alp" id="lab-decimal-binario"><section class="lab-card">
<h3>Conversor decimal → binário</h3><label for="decbin-input">Número decimal (0 a 255)</label><input id="decbin-input" type="number" min="0" max="255" step="1" value="13">
<button type="button" id="decbin-go">Converter</button><p>Representação binária: <strong class="lab-big" id="decbin-output">1101</strong></p>
<p class="lab-muted">Leia a coluna dos restos de baixo para cima.</p><div class="lab-table-wrap"><table><thead><tr><th>Dividendo</th><th>Operação</th><th>Quociente</th><th>Resto</th></tr></thead><tbody id="decbin-steps"></tbody></table></div><p class="lab-message" id="decbin-msg" role="status"></p></section></div>


Logo, \(13_{10}=1101_2\).

## 11.3 Binário para decimal

Cada posição representa uma potência de 2:

\(1101_2 = 1\times 2^3 + 1\times 2^2 + 0\times 2^1 + 1\times 2^0 = 13\).



<div class="conversor-binario">
  <h3>Conversor binário para decimal</h3>

  <p>
    Digite um número binário de até 8 bits e clique em
    <strong>Converter</strong> para visualizar o resultado.
  </p>

 <div id="form-conversor-binario">
    <label for="numero-binario">Número binário:</label>
    <div class="entrada-binaria">
      <input
        type="text"
        id="numero-binario"
        maxlength="8"
        inputmode="numeric"
        placeholder="Ex.: 1101"
        autocomplete="off"
        aria-describedby="mensagem-binario"
      >
     <button type="button" id="btn-converter-binario"> Converter </button>
    </div>
    <p id="mensagem-binario" role="status" aria-live="polite"></p>
  </div>

  <div class="resultado-binario">
    <p><strong>Resultado em decimal:</strong></p>
    <output id="resultado-decimal" aria-live="polite">--</output>
  </div>

  <h4>Entenda o cálculo</h4>

  <div class="tabela-responsiva">
    <table>
      <thead>
        <tr>
          <th>Posição</th>
          <th>Bit</th>
          <th>Potência de 2</th>
          <th>Multiplicação</th>
        </tr>
      </thead>
      <tbody id="tabela-binario">
        <tr>
          <td colspan="4">Digite um número e clique em Converter.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p><strong>Soma dos resultados:</strong></p>
  <p id="calculo-binario">--</p>
</div>

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



## 11.4 Hexadecimal

O sistema hexadecimal usa os símbolos 0–9 e A–F. Um dígito hexadecimal representa quatro bits, então dois dígitos hexadecimais correspondem a oito bits. É uma forma compacta de escrever sequências binárias.

## 11.5 Memória e variáveis

Uma variável em C possui tipo, tamanho e tempo de vida. O endereço pode ser obtido com `&` para objetos apropriados. Ponteiros armazenam endereços, mas devem apontar para objetos válidos antes de serem dereferenciados.

```c
int idade = 20;
int *p = &idade;
printf("%d\n", *p);  // lê o valor de idade por meio de p
```

O exemplo pressupõe que `p` aponta para `idade`, que continua existindo durante o uso.

## 11.6 Limites e representação

Tipos inteiros têm limites definidos pela implementação e pelo tipo escolhido. Consulte `<limits.h>` e use tipos de tamanho apropriado quando a tarefa exigir. Não assuma que `int` possui sempre o mesmo tamanho em todas as plataformas.

!!! warning "Erros comuns: atenção a estes pontos"

    - ler bits da direita para a esquerda ao converter binário para decimal;
    - confundir bit com byte;
    - presumir tamanho fixo de todos os tipos;
    - usar ponteiro não inicializado;
    - acessar memória depois que o objeto deixou de existir;
    - escrever fora dos limites de um vetor.

!!! tip "Prática guiada"

    Converta 18 e 27 para binário e confirme os resultados convertendo-os de volta para decimal. Depois, explique em suas palavras o que significa o ponteiro `p` no exemplo.

## Exercícios

1. Defina bit.
2. Explique a diferença entre bit e byte.
3. Converta 5 para binário.
4. Converta 12 para binário.
5. Converta 19 para binário.
6. Converta `1010₂` para decimal.
7. Converta `1111₂` para decimal.
8. Converta `10000₂` para decimal.
9. Explique por que hexadecimal é útil.
10. Quantos bits há em dois bytes de 8 bits?
11. Identifique as potências de 2 em `1011₂`.
12. Explique o que é endereço de memória.
13. Qual o papel do operador `&` no exemplo C?
14. O que significa `*p` quando `p` é um ponteiro válido?
15. Por que não se deve dereferenciar ponteiro não inicializado?
16. Explique o risco de escrever além de um vetor.
17. Pesquise os limites de `int` no compilador usado e documente como consultou.
18. Represente o decimal 31 em binário e hexadecimal.
19. Explique por que o tamanho de um tipo deve ser verificado quando importa.
20. Descreva duas práticas para reduzir erros de memória em C.

!!! success "Gabarito comentado"

    1. Unidade binária representada por 0 ou 1.
    2. Byte é uma unidade de armazenamento composta por bits; em plataformas comuns, 8 bits.
    3. `101₂`.
    4. `1100₂`.
    5. `10011₂`.
    6. 10.
    7. 15.
    8. 16.
    9. É compacto e cada dígito corresponde a quatro bits.
    10. 16 bits.
    11. `1×8 + 0×4 + 1×2 + 1×1 = 11`.
    12. Identificador/localizador de um objeto na memória durante a execução.
    13. Obtém o endereço de `idade`.
    14. Acessa o objeto apontado por `p`.
    15. O endereço pode ser inválido; o comportamento é indefinido.
    16. Pode corromper dados e causar comportamento indefinido.
    17. Depende da plataforma; consultar `INT_MIN` e `INT_MAX` em `<limits.h>`.
    18. `11111₂`, `1F₁₆`.
    19. Tipos e plataformas podem diferir em tamanho e limites.
    20. Inicializar ponteiros, validar índices, respeitar o tempo de vida dos objetos e usar avisos do compilador.

## Resumo e referências

Binário representa valores por potências de dois; memória armazena objetos e ponteiros permitem referenciar endereços válidos.

Referências: ISO C; cppreference.com; documentação do compilador utilizado.
