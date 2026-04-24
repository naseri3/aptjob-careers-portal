// ==============================
// ✅ 로그인 함수
// ==============================
function testLogin() {
  const id = document.getElementById("testId")?.value.trim();
  const pw = document.getElementById("testPw")?.value.trim();

  // 예외 처리
  if (!id) {
    alert("아이디를 입력해주세요.");
    return;
  }

  if (!pw) {
    alert("비밀번호를 입력해주세요.");
    return;
  }

  // 테스트 로그인
  if (id === "admin" && pw === "1234") {
    // 로그인 상태 저장
    localStorage.setItem(
      "loginUser",
      JSON.stringify({
        id: id,
      })
    );

    alert("로그인 성공!");

    // careers 페이지 이동
    location.href = "/mypage/mypage-resume.html";
  } else {
    alert("아이디 또는 비밀번호가 틀렸습니다.");
  }
}

// ==============================
// ✅ 엔터키 로그인 (실무 필수)
// ==============================
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const loginBtn = document.querySelector(".btn-login");
    if (loginBtn) loginBtn.click();
  }
});

// ==============================
// ✅ 로그인 상태 체크 + UI 변경
// (careers.html 포함 모든 페이지)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const loginBtn = document.querySelector(".company-hero__login");

  // 버튼 없으면 종료
  if (!loginBtn) return;

  // 로그인 상태
  if (user) {
    loginBtn.href = "/mypage/mypage.html";
    loginBtn.innerHTML = `
      <img src="/assets/img/iconoir_user.png" width="20">
      마이페이지
    `;
  } 
  // 비로그인 상태
  else {
    loginBtn.href = "/login.html";
    loginBtn.innerHTML = `
      <img src="/assets/img/iconoir_user.png" width="20">
      로그인
    `;
  }
});

// ==============================
// ✅ 로그아웃 이벤트 (여러 버튼 대응)
// ==============================
document.addEventListener("DOMContentLoaded", function () {

  const logoutBtns = document.querySelectorAll(".logout-btn");

  logoutBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // 로그인 정보 삭제
      localStorage.removeItem("loginUser");

      alert("로그아웃 되었습니다.");

      // 로그인 페이지 이동
      location.href = "/login.html";
    });
  });
});


// ==============================
// ✅ careers 진입 시 강제 로그아웃
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  // careers 페이지에서만 실행
  if (location.pathname.includes("careers")) {
    localStorage.removeItem("loginUser");
  }
});