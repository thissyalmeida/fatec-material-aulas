
document.addEventListener("DOMContentLoaded", async function () {
    if (typeof mermaid === "undefined") {
        console.error("Mermaid não foi carregado.");
        return;
    }

    mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "default",
        flowchart: {
            htmlLabels: true,
            curve: "linear"
        }
    });

    try {
        await mermaid.run();
    } catch (erro) {
        console.error("Erro ao renderizar diagramas Mermaid:", erro);
    }
});
