/** 로고 버튼 */
const logoCatBtn = document.querySelector("#homeIcon");

// 누르면 메인 페이지로 이동
logoCatBtn.addEventListener(
  "click",
  () => (window.location.href = "./index.html")
);
