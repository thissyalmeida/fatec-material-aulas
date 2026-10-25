
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".botao-resposta").forEach(function (botao) {
        botao.addEventListener("click", function () {
            const gabarito = botao.nextElementSibling;

            if (!gabarito ||
                !gabarito.classList.contains("gabarito-comentado")) {
                console.error("Bloco de gabarito não encontrado.");
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
