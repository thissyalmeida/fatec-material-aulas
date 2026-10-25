(function () {
  "use strict";
  function iniciarLaboratorioBinario() {
    const raiz = document.getElementById("lab-binario");
    if (!raiz || raiz.dataset.inicializado === "true") return;
    raiz.dataset.inicializado = "true";
    const $ = (id) => raiz.querySelector("#" + id);
    const entrada = $("lab-bin-input"), resultado = $("lab-bin-result");
    const tabela = $("lab-bin-steps"), equacao = $("lab-bin-equation"), mensagem = $("lab-bin-message");

    function converter(binario, corpo, campoResultado, campoEquacao) {
      let soma = 0;
      const parcelas = [];
      corpo.replaceChildren();
      for (let i = 0; i < binario.length; i++) {
        const bit = Number(binario[i]), pos = binario.length - 1 - i;
        const potencia = 2 ** pos, parcela = bit * potencia;
        soma += parcela; parcelas.push(String(parcela));
        const tr = document.createElement("tr");
        if (bit === 1) tr.classList.add("bit-one");
        [`${bit}`, `${pos}`, `2^${pos} = ${potencia}`, `${bit} × ${potencia} = ${parcela}`].forEach(v => {
          const td = document.createElement("td"); td.textContent = v; tr.appendChild(td);
        });
        corpo.appendChild(tr);
      }
      campoResultado.textContent = String(soma);
      campoEquacao.textContent = parcelas.join(" + ") + " = " + soma;
      return soma;
    }
    function converterEntrada() {
      const bin = entrada.value.trim();
      mensagem.className = "lab-message"; mensagem.textContent = "";
      if (!/^[01]{1,8}$/.test(bin)) {
        resultado.textContent = "--"; tabela.replaceChildren(); equacao.textContent = "--";
        mensagem.classList.add("is-error"); mensagem.textContent = "Digite de 1 a 8 bits, utilizando somente 0 e 1."; return;
      }
      converter(bin, tabela, resultado, equacao);
      mensagem.classList.add("is-success"); mensagem.textContent = "Conversão realizada! Observe a contribuição de cada bit.";
    }
    $("lab-bin-convert").addEventListener("click", converterEntrada);
    entrada.addEventListener("keydown", e => { if (e.key === "Enter") converterEntrada(); });
    converterEntrada();

    const num = $("lab-challenge-number"), resposta = $("lab-challenge-answer");
    const conferir = $("lab-challenge-check"), novo = $("lab-challenge-new");
    const feedback = $("lab-challenge-feedback"), score = $("lab-challenge-score");
    const mostrar = $("lab-challenge-show"), explicacao = $("lab-challenge-explanation");
    let atual = "", pontos = 0, respondido = false;
    function mostrarExplicacao() {
      explicacao.replaceChildren();
      const strong = document.createElement("strong"); strong.textContent = `Resolução de ${atual}:`;
      const p = document.createElement("p");
      p.textContent = atual.split("").map((b, i) => {
        const pos = atual.length - 1 - i; return `${b} × 2^${pos} (${Number(b) * 2 ** pos})`;
      }).join(" + ") + ` = ${parseInt(atual, 2)}`;
      explicacao.append(strong, p); explicacao.hidden = false;
    }
    function gerar() {
      const tamanho = 3 + Math.floor(Math.random() * 6);
      atual = Array.from({length:tamanho}, () => Math.random() < .5 ? "0" : "1").join("");
      if (/^0+$/.test(atual)) atual = "1" + atual.slice(1);
      num.textContent = atual; resposta.value = ""; resposta.disabled = false; conferir.disabled = false;
      feedback.className = "lab-message"; feedback.textContent = ""; explicacao.hidden = true; explicacao.replaceChildren(); respondido = false;
    }
    conferir.addEventListener("click", () => {
      if (respondido) { feedback.textContent = "Gere um novo desafio para continuar."; return; }
      if (resposta.value.trim() === "") { feedback.className = "lab-message is-error"; feedback.textContent = "Digite sua resposta antes de conferir."; return; }
      if (!/^\d+$/.test(resposta.value.trim())) { feedback.className = "lab-message is-error"; feedback.textContent = "Informe um número decimal inteiro."; return; }
      const correto = parseInt(atual, 2); respondido = true; resposta.disabled = true; conferir.disabled = true;
      if (Number(resposta.value) === correto) {
        pontos++; score.textContent = String(pontos); feedback.className = "lab-message is-success"; feedback.textContent = "Correto! Você ganhou 1 ponto.";
      } else { feedback.className = "lab-message is-error"; feedback.textContent = `Ainda não. A resposta correta é ${correto}. Veja a explicação abaixo.`; }
      mostrarExplicacao();
    });
    novo.addEventListener("click", gerar);
    mostrar.addEventListener("click", () => { mostrarExplicacao(); feedback.textContent = "Veja a contribuição de cada bit na resolução."; });
    resposta.addEventListener("keydown", e => { if (e.key === "Enter") conferir.click(); });
    gerar();
  }
  if (typeof document$ !== "undefined") document$.subscribe(iniciarLaboratorioBinario);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciarLaboratorioBinario);
  else iniciarLaboratorioBinario();
})();
