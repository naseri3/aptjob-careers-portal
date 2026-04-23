document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // ✅ 공통 요소
    // ==============================
    const listBtns = document.querySelectorAll(".job-action-list");
    const applyBtns = document.querySelectorAll(".job-action-apply");
    const favoriteBtns = document.querySelectorAll(".job-action-favorite");
    const printBtns = document.querySelectorAll(".job-action-print");
    const applyModalEl = document.getElementById("applyModal");

    // 로그인 상태
    const user = JSON.parse(localStorage.getItem("loginUser"));

    // 공고 ID
    const jobId = 937;
    const appliedKey = `appliedJob_${jobId}`;
    const favoriteKey = `favoriteJob_${jobId}`;

    // ==============================
    // ✅ 초기 상태 반영
    // ==============================
    updateApplyButtons();
    updateFavoriteButtons();

    // ==============================
    // ✅ 1. 목록보기
    // ==============================
    listBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            location.href = "/careers.html";
        });
    });

    // ==============================
    // ✅ 2. 지원하기
    // ==============================
    applyBtns.forEach((btn) => {
        btn.addEventListener("click", function () {

            const isApplied = localStorage.getItem(appliedKey) === "true";

            // 이미 지원
            if (isApplied) {
                alert("이미 지원한 공고입니다.");
                return;
            }

            // 비로그인
            if (!user) {
                alert("로그인이 필요합니다.");
                location.href = "/login.html";
                return;
            }

            // 모달 열기
            if (!applyModalEl) {
                alert("지원하기 모달이 없습니다.");
                return;
            }

            const modal = new bootstrap.Modal(applyModalEl);
            modal.show();
        });
    });

    // ==============================
    // ✅ 2-1. 모달 내부 이벤트
    // ==============================
    document.addEventListener("click", function (e) {

        // =========================
        // 🔥 지원하기 → 완료 화면 전환
        // =========================
        if (e.target.classList.contains("apply-submit-btn")) {

            // 상태 저장
            localStorage.setItem(appliedKey, "true");

            // 🔥 메인 버튼 상태 변경 (핵심)
            updateApplyButtons();

            // 화면 전환
            document.querySelector(".apply-step-1").style.display = "none";
            document.querySelector(".apply-step-2").style.display = "block";
        }

        // =========================
        // 🔥 완료 화면 - 닫기
        // =========================
        if (e.target.classList.contains("apply-close-map")) {
            closeApplyModal();
        }

        // =========================
        // 🔥 완료 화면 - 내 지원공고
        // =========================
        if (e.target.classList.contains("apply-list-map")) {
            location.href = "/myPage/mypage-applications.html";
        }

    });

    // ==============================
    // ✅ 3. 즐겨찾기
    // ==============================
    favoriteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {

            const isActive = btn.classList.toggle("active");

            if (isActive) {
                localStorage.setItem(favoriteKey, "true");
            } else {
                localStorage.setItem(favoriteKey, "false");
            }

            updateFavoriteButtons();
        });
    });

    // ==============================
    // ✅ 4. 인쇄하기
    // ==============================
    printBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            window.print();
        });
    });

    // ==============================
    // ✅ 지원 버튼 상태 변경
    // ==============================
    function updateApplyButtons() {
        const isApplied = localStorage.getItem(appliedKey) === "true";

        applyBtns.forEach((btn) => {
            if (isApplied) {
                btn.textContent = "지원완료";
                btn.classList.remove("btn-primary");
                btn.classList.add("btn-secondary");
                btn.disabled = true;
            } else {
                btn.textContent = "지원하기";
                btn.classList.remove("btn-secondary");
                btn.classList.add("btn-primary");
                btn.disabled = false;
            }
        });
    }

    // ==============================
    // ✅ 즐겨찾기 상태 변경
    // ==============================
    function updateFavoriteButtons() {
        const isFavorite = localStorage.getItem(favoriteKey) === "true";

        favoriteBtns.forEach((btn) => {
            if (isFavorite) {
                btn.classList.add("active");
                btn.style.color = "#f6ff00";
                btn.style.backgroundColor = "#777777";
            } else {
                btn.classList.remove("active");
                btn.style.color = "";
                btn.style.backgroundColor = "";
            }
        });
    }

    // ==============================
    // ✅ 모달 닫힐 때 초기화
    // ==============================
    if (applyModalEl) {
        applyModalEl.addEventListener("hidden.bs.modal", function () {
            resetApplyModal();
        });
    }

});


// ==============================
// ✅ 모달 초기화
// ==============================
function resetApplyModal() {
    const step1 = document.querySelector(".apply-step-1");
    const step2 = document.querySelector(".apply-step-2");

    if (step1) step1.style.display = "block";
    if (step2) step2.style.display = "none";
}


// ==============================
// ✅ 모달 닫기
// ==============================
function closeApplyModal() {
    const modalEl = document.getElementById("applyModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
}


// ==============================
// ✅ 시연용 초기화 (페이지 나갈 때)
// ==============================
window.addEventListener("beforeunload", function () {
    localStorage.removeItem("appliedJob_937");
});