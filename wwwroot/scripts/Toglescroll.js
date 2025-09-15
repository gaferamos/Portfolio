window.toggleBodyScroll = {
    add: () => {

        // Salva a posição atual do scroll
        window.scrollPosition = window.scrollY;
        document.body.classList.add("noscroll");
        document.body.style.top = `-${window.scrollPosition}px`;
    },
    remove: () => {
        document.body.classList.remove("noscroll");
        // Restaura a posição do scroll
        window.scrollTo(0, window.scrollPosition);
        document.body.style.top = '';
    }
};

