document.addEventListener("DOMContentLoaded", function () {
    // ================================
    // 1️⃣ 인증 모달 (새로고침 시만 뜸)
    // ================================
    const certModalEl = document.getElementById("certModal");
    const certModal = new bootstrap.Modal(certModalEl);

    // 최초 진입시에만 실행
    if (!sessionStorage.getItem("certShown")) {
        certModal.show();
        sessionStorage.setItem("certShown", "true");
    }


    // ================================
    // 2️⃣ 인증 STEP 처리
    // ================================
    const certStep1 = document.querySelector(".cert-step-1");
    const certStep2 = document.querySelector(".cert-step-2");

    if (certStep1 && certStep2) {

        // STEP1 → STEP2
        certStep1.addEventListener("click", () => {
            certStep1.style.display = "none";
            certStep2.style.display = "block";
        });

        // STEP2 → 페이지 이동
        certStep2.addEventListener("click", () => {
            window.location.href = "/mypage/resume-form.html";
        });

    }


    // ================================
    // 3️⃣ 경력 모달 버튼
    // ================================
    const importBtn = document.getElementById("importCareerBtn");
    const careerModalEl = document.getElementById("careerModal");

    if (importBtn && careerModalEl) {
        const careerModal = new bootstrap.Modal(careerModalEl);

        importBtn.addEventListener("click", () => {
            careerModal.show();

            // 👉 모달 클릭 시 페이지 이동
            careerModalEl.addEventListener("click", () => {
                window.location.href = "/mypage/resume-form.html";
            }, { once: true }); // 한 번만 실행
        });
    }

});