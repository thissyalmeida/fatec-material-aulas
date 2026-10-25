
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".botao-resposta").forEach(function (botao) {
        botao.addEventListener("click", function () {
            let elemento = botao.nextElementSibling;

            // Procura o bloco do gabarito nos elementos seguintes.
            while (
                elemento &&
                !elemento.classList.contains("gabarito-comentado")
            ) {
                elemento = elemento.nextElementSibling;
            }

            if (!elemento) {
                console.error("Gabarito comentado não encontrado.");
                return;
            }

            const abrir = elemento.hidden ||
                getComputedStyle(elemento).display === "none";

            elemento.hidden = !abrir;
            elemento.style.display = abrir ? "block" : "none";

            botao.textContent = abrir
                ? "Ocultar Resposta"
                : "Ver Resposta";

            botao.setAttribute("aria-expanded", String(abrir));
        });
    });
});
