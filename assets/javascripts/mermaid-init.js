
document.addEventListener("DOMContentLoaded", function () {
    if (typeof mermaid === "undefined") {
        console.error("Mermaid não foi carregado.");
        return;
    }

    mermaid.initialize({
        startOnLoad: true,
        securityLevel: "strict",
        theme: "default",
        flowchart: {
            htmlLabels: true,
            curve: "linear"
        }
    });

    mermaid.run();
});
