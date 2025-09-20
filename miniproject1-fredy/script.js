AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

feather.replace();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro-screen");
    const enterBtn = document.getElementById("enter-btn");

    enterBtn.addEventListener("click", () => {
        intro.classList.add("hidden");
        document.body.style.overflow = "auto";
    });

    document.body.style.overflow = "hidden";
});