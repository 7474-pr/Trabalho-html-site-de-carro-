document.querySelectorAll(".carrossel-informacoes").forEach((carrossel) => {
    const imagens = carrossel.querySelector(".informacoes");
    const anterior = carrossel.querySelector(".anterior");
    const proxima = carrossel.querySelector(".proxima");

    const atualizarSetas = () => {
        anterior.disabled = imagens.scrollLeft <= 0;
        proxima.disabled =
            imagens.scrollLeft + imagens.clientWidth >= imagens.scrollWidth - 1;
    };

    anterior.addEventListener("click", () => {
        imagens.scrollBy({ left: -imagens.clientWidth, behavior: "smooth" });
    });
    proxima.addEventListener("click", () => {
        imagens.scrollBy({ left: imagens.clientWidth, behavior: "smooth" });
    });
    imagens.addEventListener("scroll", atualizarSetas);
    atualizarSetas();
});