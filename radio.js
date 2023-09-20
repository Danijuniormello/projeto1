document.addEventListener("DOMContentLoaded", function () {
    // Obtém todos os links de navegação
    const navigationLinks = document.querySelectorAll(".music-navigation a");

    // Adiciona um ouvinte de evento de clique a cada link de navegação
    navigationLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que o link atualize a página

            // Obtém o destino do link (o ID da música)
            const targetId = this.getAttribute("href").substring(1);

            // Obtém o elemento da música de destino
            const targetMusic = document.getElementById(targetId);

            // Role até a música de destino
            if (targetMusic) {
                targetMusic.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
