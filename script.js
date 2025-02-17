window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.style.opacity = 1 - window.scrollY / 500;
});