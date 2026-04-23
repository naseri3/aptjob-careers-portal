let certStep = 1;
const totalStep = 4;

function openCertificationModal() {
  certStep = 1;

  document.getElementById('certImage').src = `/assets/img/certification-${certStep}.png`;

  const modal = new bootstrap.Modal(document.getElementById('certificationModal'));
  modal.show();
}

// 이미지 클릭 시 다음 단계
document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("certImage");

  img.addEventListener("click", () => {
    certStep++;

    if (certStep > totalStep) {
      // 마지막 → 회원가입 이동
      window.location.href = "/join.html";
      return;
    }

    img.src = `/assets/img/certification-${certStep}.png`;
  });
});