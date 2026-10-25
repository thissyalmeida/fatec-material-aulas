
document.addEventListener("DOMContentLoaded", function () {
    const entrada = document.getElementById("numero-binario");
    const resultado = document.getElementById("resultado-decimal");
    const tabela = document.getElementById("tabela-binario");
    const calculo = document.getElementById("calculo-binario");
    const mensagem = document.getElementById("mensagem-binario");

    // Verifica se o conversor está presente na página
    if (!entrada || !resultado || !tabela || !calculo || !mensagem) {
        return;
    }

    function converterBinario() {
        const binario = entrada.value.trim();

        // Limpa os resultados anteriores
        tabela.innerHTML = "";
        calculo.textContent = "";
        mensagem.textContent = "";

        // Valida a entrada: somente 0 e 1, de 1 a 8 bits
        if (!/^[01]{1,8}$/.test(binario)) {
            resultado.textContent = "--";
            mensagem.textContent =
                "Digite apenas 0 e 1, com no máximo 8 algarismos.";
            return;
        }

        // Converte o número binário para decimal
        const decimal = parseInt(binario, 2);
        resultado.textContent = decimal;

        let soma = 0;
        const parcelas = [];

        // Percorre os bits da direita para a esquerda
        for (let i = 0; i < binario.length; i++) {
            const bit = Number(binario[binario.length - 1 - i]);
            const potencia = i;
            const valorPotencia = 2 ** potencia;
            const produto = bit * valorPotencia;

            soma += produto;
            parcelas.unshift(produto);

            // Cria uma linha da tabela
            const linha = document.createElement("tr");

            const colunaPosicao = document.createElement("td");
            colunaPosicao.textContent = potencia;

            const colunaBit = document.createElement("td");
            colunaBit.textContent = bit;

            const colunaPotencia = document.createElement("td");
            colunaPotencia.textContent =
                `2^${potencia} = ${valorPotencia}`;

            const colunaProduto = document.createElement("td");
            colunaProduto.textContent =
                `${bit} × ${valorPotencia} = ${produto}`;

            linha.append(
                colunaPosicao,
                colunaBit,
                colunaPotencia,
                colunaProduto
            );

            tabela.appendChild(linha);
        }

        // Mostra a soma final
        calculo.textContent =
            parcelas.join(" + ") + " = " + soma;
    }

    // Atualiza os cálculos enquanto o aluno digita
    entrada.addEventListener("input", converterBinario);

    // Botões com exemplos prontos
    document.querySelectorAll("[data-binario]").forEach(function (botao) {
        botao.addEventListener("click", function () {
            entrada.value = botao.dataset.binario;
            converterBinario();
        });
    });

    // Apresenta um exemplo inicial
    entrada.value = "1101";
    converterBinario();
});
