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

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("sampleModal");
    const confirmBtn = document.getElementById("modalConfirmBtn");

    // 최초 1회만 띄우기 (세션 기준)
    if (!sessionStorage.getItem("sampleModalShown")) {
        modal.classList.add("show");
        sessionStorage.setItem("sampleModalShown", "true");
    }

    // 확인 버튼 클릭 → 닫기
    confirmBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("companyInfoBtn");
    const panel = document.getElementById("footerInfoPanel");
    const footer = document.querySelector(".site-footer");

    if (!btn || !panel || !footer) return;

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = panel.classList.contains("show");

        if (isOpen) {
            panel.classList.remove("show");
            return;
        }

        // 먼저 패널 열기
        panel.classList.add("show");

        // 패널 높이가 반영된 뒤 스크롤 이동
        setTimeout(function () {
            const panelTop = panel.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: panelTop - 80,
                behavior: "smooth"
            });
        }, 50);
    });

    panel.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    document.addEventListener("click", function () {
        panel.classList.remove("show");
    });
});