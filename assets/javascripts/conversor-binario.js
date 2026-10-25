
(function () {
    function iniciarConversorBinario() {
        const formulario = document.getElementById(
            "form-conversor-binario"
        );

        if (!formulario || formulario.dataset.inicializado === "true") {
            return;
        }

        formulario.dataset.inicializado = "true";

        const entrada = document.getElementById("numero-binario");
        const resultado = document.getElementById("resultado-decimal");
        const tabela = document.getElementById("tabela-binario");
        const calculo = document.getElementById("calculo-binario");
        const mensagem = document.getElementById("mensagem-binario");

        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const binario = entrada.value.trim();

            mensagem.textContent = "";
            tabela.replaceChildren();
            calculo.textContent = "--";

            if (!/^[01]{1,8}$/.test(binario)) {
                resultado.textContent = "--";
                mensagem.textContent =
                    "Digite de 1 a 8 bits, utilizando apenas 0 e 1.";
                entrada.focus();
                return;
            }

            const decimal = parseInt(binario, 2);
            resultado.textContent = decimal;

            let soma = 0;
            const fragmento = document.createDocumentFragment();
            const parcelas = [];

            for (let i = 0; i < binario.length; i++) {
                const bit = Number(binario[i]);
                const posicao = binario.length - 1 - i;
                const potencia = 2 ** posicao;
                const produto = bit * potencia;

                soma += produto;
                parcelas.push(produto);

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

                fragmento.appendChild(linha);
            }

            tabela.appendChild(fragmento);
            calculo.textContent =
                parcelas.join(" + ") + " = " + soma;
        });
    }

    // Compatibilidade com a navegação instantânea do Material.
    if (typeof document$ !== "undefined") {
        document$.subscribe(iniciarConversorBinario);
    } else if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            iniciarConversorBinario
        );
    } else {
        iniciarConversorBinario();
    }
})();
