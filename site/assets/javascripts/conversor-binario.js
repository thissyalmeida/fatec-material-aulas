
function iniciarConversorBinario() {
    const entrada = document.getElementById("numero-binario");
    const resultado = document.getElementById("resultado-decimal");
    const tabela = document.getElementById("tabela-binario");
    const calculo = document.getElementById("calculo-binario");
    const mensagem = document.getElementById("mensagem-binario");

    if (!entrada || !resultado || !tabela || !calculo || !mensagem) {
        return;
    }

    // Evita registrar os mesmos eventos mais de uma vez.
    if (entrada.dataset.inicializado === "true") {
        return;
    }
    entrada.dataset.inicializado = "true";

    function converter() {
        const binario = entrada.value.trim();

        tabela.replaceChildren();
        calculo.textContent = "";

        if (!/^[01]{1,8}$/.test(binario)) {
            resultado.textContent = "--";
            mensagem.textContent =
                "Digite de 1 a 8 bits, utilizando apenas 0 e 1.";
            return;
        }

        mensagem.textContent = "";
        const decimal = parseInt(binario, 2);
        resultado.textContent = decimal;

        const parcelas = [];

        for (let i = 0; i < binario.length; i++) {
            const posicao = binario.length - 1 - i;
            const bit = Number(binario[i]);
            const potencia = 2 ** posicao;
            const produto = bit * potencia;

            parcelas.push(`${bit} × ${potencia}`);

            const linha = document.createElement("tr");

            [
                posicao,
                bit,
                `2^${posicao} = ${potencia}`,
                `${bit} × ${potencia} = ${produto}`
            ].forEach(function (valor) {
                const celula = document.createElement("td");
                celula.textContent = valor;
                linha.appendChild(celula);
            });

            tabela.appendChild(linha);
        }

        const soma = binario.split("").reduce(function (total, bit, i) {
            return total + Number(bit) * 2 ** (binario.length - 1 - i);
        }, 0);

        calculo.textContent =
            parcelas.join(" + ") + " = " + soma;
    }

    entrada.addEventListener("input", converter);

    document.querySelectorAll("[data-binario]").forEach(function (botao) {
        botao.addEventListener("click", function () {
            entrada.value = botao.dataset.binario;
            converter();
        });
    });

    converter();
}

// Inicialização tradicional e compatibilidade com navegação instantânea.
if (typeof document$ !== "undefined") {
    document$.subscribe(iniciarConversorBinario);
} else {
    document.addEventListener("DOMContentLoaded", iniciarConversorBinario);
}
