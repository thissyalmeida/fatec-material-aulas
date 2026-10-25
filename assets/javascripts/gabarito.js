document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".botao-resposta").forEach(function (botao) {
        botao.addEventListener("click", function () {
            const container = botao.closest(".questao-com-gabarito");
            const gabarito = container?.querySelector(".gabarito-comentado");

            if (!gabarito) {
                console.error("Gabarito não encontrado no contêiner da questão.");
                return;
            }

            gabarito.hidden = !gabarito.hidden;

            const aberto = !gabarito.hidden;

            botao.textContent = aberto
                ? "Ocultar Resposta"
                : "Ver Resposta";

            botao.setAttribute("aria-expanded", String(aberto));
        });
    });
});