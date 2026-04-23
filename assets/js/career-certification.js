document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // 1️⃣ 인증 모달 (10분 쿨타임)
    // ================================
    const certModalEl = document.getElementById("certModal");
    if (!certModalEl) return;

    const certModal = new bootstrap.Modal(certModalEl);

    const COOLDOWN = 10 * 60 * 1000; // 10분
    const now = Date.now();
    const lastShown = sessionStorage.getItem("certShownTime");

    // 👉 resume-form 페이지에서만 동작
    if (window.location.pathname === "/mypage/resume-form.html") {
        if (!lastShown || (now - lastShown > COOLDOWN)) {
            certModal.show();
            sessionStorage.setItem("certShownTime", now);
        }
    }

    // ================================
    // 2️⃣ Shift + R → 강제 실행
    // ================================
    document.addEventListener("keydown", (e) => {
        if (e.shiftKey && e.key.toLowerCase() === "r") {
            e.preventDefault(); // 새로고침 방지
            certModal.show();
            sessionStorage.setItem("certShownTime", Date.now()); // 시간 갱신
        }
    });


    // ================================
    // 3️⃣ 인증 STEP 처리
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
    // 4️⃣ 경력 모달
    // ================================
    const importBtn = document.getElementById("importCareerBtn");
    const careerModalEl = document.getElementById("careerModal");

    if (importBtn && careerModalEl) {
        const careerModal = new bootstrap.Modal(careerModalEl);

        importBtn.addEventListener("click", () => {
            careerModal.show();

            // 👉 모달 클릭 시 이동
            careerModalEl.addEventListener("click", () => {
                window.location.href = "/mypage/resume-form.html";
            }, { once: true });
        });
    }

});