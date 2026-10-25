document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".botao-resposta").forEach(function (botao) {
    botao.addEventListener("click", function () {
      const gabarito = botao.nextElementSibling;

      if (!gabarito ||
          !gabarito.classList.contains("gabarito-comentado")) {
        return;
      }

      const visivel = gabarito.classList.toggle("visivel");

      botao.textContent = visivel
        ? "Ocultar Resposta"
        : "Ver Resposta";

      botao.setAttribute("aria-expanded", String(visivel));
    });
  });
});