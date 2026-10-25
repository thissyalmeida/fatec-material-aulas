document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".atividade-interativa .opcoes-atividade").forEach(function (grupo) {
    grupo.querySelectorAll("button[data-correct]").forEach(function (botao) {
      botao.addEventListener("click", function () {
        const feedback = grupo.nextElementSibling;
        const correto = botao.dataset.correct === "true";
        if (feedback && feedback.classList.contains("feedback-atividade")) {
          feedback.textContent = correto
            ? "Correto! Você identificou a resposta adequada."
            : "Ainda não. Revise a explicação da seção e tente novamente.";
          feedback.classList.toggle("resposta-correta", correto);
          feedback.classList.toggle("resposta-incorreta", !correto);
        }
      });
    });
  });

  const botaoComponentes = document.getElementById("corrigir-componentes");
  if (botaoComponentes) {
    botaoComponentes.addEventListener("click", function () {
      const respostas = { comp1: "ram", comp2: "ssd", comp3: "cpu" };
      let acertos = 0;
      Object.keys(respostas).forEach(function (id) {
        const campo = document.getElementById(id);
        if (campo && campo.value === respostas[id]) acertos++;
      });
      const feedback = document.getElementById("feedback-componentes");
      feedback.textContent = "Você acertou " + acertos + " de 3. " +
        (acertos === 3 ? "Excelente!" : "Revise as funções dos componentes e tente novamente.");
    });
  }

  const seletorProblema = document.getElementById("problema-decomposicao");
  const resultadoProblema = document.getElementById("resultado-decomposicao");
  if (seletorProblema && resultadoProblema) {
    const exemplos = {
      compra: [
        ["Entrada", "quantidade e preço unitário"],
        ["Processamento", "quantidade × preço unitário"],
        ["Saída", "valor total da compra"]
      ],
      retangulo: [
        ["Entrada", "largura e altura"],
        ["Processamento", "área = largura × altura"],
        ["Saída", "área em unidades quadradas"]
      ],
      combustivel: [
        ["Entrada", "distância percorrida e litros consumidos"],
        ["Processamento", "consumo médio = distância ÷ litros"],
        ["Saída", "consumo médio em km/L"]
      ]
    };
    function atualizarProblema() {
      resultadoProblema.replaceChildren();
      exemplos[seletorProblema.value].forEach(function (linha) {
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = linha[0] + ": ";
        p.appendChild(strong);
        p.appendChild(document.createTextNode(linha[1] + "."));
        resultadoProblema.appendChild(p);
      });
    }
    seletorProblema.addEventListener("change", atualizarProblema);
    atualizarProblema();
  }
});
