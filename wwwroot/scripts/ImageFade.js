window.imageFadeInit = () => {
    const targets = document.querySelectorAll(".imageofme");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.remove("visible");
                entry.target.classList.add("hidden");
            }
        });
    }, { threshold: 0.6 });

    targets.forEach(el => observer.observe(el));
};


