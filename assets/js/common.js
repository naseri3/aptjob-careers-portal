document.addEventListener("DOMContentLoaded", () => {
    var a = document.getElementById("backToTop");
    if (!a) return;
    window.addEventListener("scroll", () => {
        window.scrollY > 300
            ? a.classList.add("show")
            : a.classList.remove("show");
    }),
        a.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
});