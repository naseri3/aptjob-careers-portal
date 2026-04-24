document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("joinModal");
    const openArea = document.getElementById("openModalArea");
    const closeBtn = document.getElementById("modalCloseBtn");
    const closeX = document.getElementById("modalCloseX");
    const overlay = document.querySelector(".custom-modal__overlay");

    // 열기
    openArea?.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.add("show");
    });

    // 닫기 (버튼)
    closeBtn?.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // 닫기 (X)
    closeX?.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // 배경 클릭 닫기
    overlay?.addEventListener("click", () => {
        modal.classList.remove("show");
    });
});