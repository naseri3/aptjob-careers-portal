// ================================
// 1️⃣ 모달 열기
// ================================
const importBtn = document.getElementById("importCareerBtn");
const careerModalEl = document.getElementById("careerModal");

let careerModal = null;

importBtn.addEventListener("click", () => {
    careerModal = new bootstrap.Modal(careerModalEl);
    careerModal.show();
});


// ================================
// 2️⃣ STEP 요소
// ================================
const step1 = document.querySelector(".career-step-1");
const step2 = document.querySelector(".career-step-2");
const step3 = document.querySelector(".career-step-3");

let currentStep = 1;


// ================================
// 3️⃣ STEP 변경 함수 (핵심)
// ================================
function goStep(step) {
    currentStep = step;

    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";

    if (step === 1) step1.style.display = "block";
    if (step === 2) step2.style.display = "block";
    if (step === 3) step3.style.display = "block";
}


// ================================
// 4️⃣ 클릭 이벤트
// ================================

// STEP1 → STEP2
step1.addEventListener("click", () => {
    goStep(2);
});

// STEP2 → STEP3
step2.addEventListener("click", () => {
    goStep(3);
});

// STEP3 → 페이지 이동
step3.addEventListener("click", () => {
    window.location.href = "/mypage/resume-form.html";
});


// ================================
// 5️⃣ 모달 닫힐 때 초기화 (중요🔥)
// ================================
careerModalEl.addEventListener("hidden.bs.modal", () => {
    goStep(1);
});