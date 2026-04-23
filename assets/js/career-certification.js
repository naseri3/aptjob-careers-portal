document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // 1️⃣ 인증 모달
    // ================================
    const certModalEl = document.getElementById("certModal");
    if (!certModalEl) return;

    const certModal = new bootstrap.Modal(certModalEl);

    // 최초 1회
    if (!sessionStorage.getItem("certShown")) {
        certModal.show();
        sessionStorage.setItem("certShown", "true");
    }

    // Shift + R 강제 실행
    document.addEventListener("keydown", (e) => {
        if (e.shiftKey && e.key.toLowerCase() === "r") {
            e.preventDefault(); // 새로고침 방지
            certModal.show();
        }
    });


    // ================================
    // 2️⃣ 인증 STEP 처리
    // ================================
    const certStep1 = document.querySelector(".cert-step-1");
    const certStep2 = document.querySelector(".cert-step-2");

    if (certStep1 && certStep2) {
        certStep1.addEventListener("click", () => {
            certStep1.style.display = "none";
            certStep2.style.display = "block";
        });

        certStep2.addEventListener("click", () => {
            window.location.href = "/mypage/resume-form.html";
        });
    }


    // ================================
    // 3️⃣ 경력 모달
    // ================================
    const importBtn = document.getElementById("importCareerBtn");
    const careerModalEl = document.getElementById("careerModal");

    if (importBtn && careerModalEl) {
        const careerModal = new bootstrap.Modal(careerModalEl);

        importBtn.addEventListener("click", () => {
            careerModal.show();

            careerModalEl.addEventListener("click", () => {
                window.location.href = "/mypage/resume-form.html";
            }, { once: true });
        });
    }

});