
function converterBinario() {
    const entrada = document.getElementById("numero-binario");
    const resultado = document.getElementById("resultado-decimal");
    const tabela = document.getElementById("tabela-binario");
    const calculo = document.getElementById("calculo-binario");
    const mensagem = document.getElementById("mensagem-binario");

    if (!entrada || !resultado || !tabela || !calculo || !mensagem) {
        console.error("Elementos do conversor não encontrados.");
        return;
    }

    const binario = entrada.value.trim();

    mensagem.textContent = "";
    tabela.replaceChildren();
    calculo.textContent = "--";

    if (!/^[01]{1,8}$/.test(binario)) {
        resultado.textContent = "--";
        mensagem.textContent =
            "Digite de 1 a 8 bits, usando apenas 0 e 1.";
        return;
    }

    const decimal = parseInt(binario, 2);
    resultado.textContent = decimal;

    let soma = 0;
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

        tabela.appendChild(linha);
    }

    calculo.textContent = parcelas.join(" + ") + " = " + soma;
window.converterBinario = converterBinario;
}
