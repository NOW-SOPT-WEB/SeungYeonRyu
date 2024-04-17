/** 사이드바 */
const sideBar = document.querySelector(".sidebar");

// 장바구니 페이지로 이동
const sideBarCartBtn = document.querySelector("#sidebar-cart");
sideBarCartBtn.addEventListener("click", () => {
  window.location.href = "./cart.html";
});

// 햄버거 버튼으로 사이드바 열기
const hamburgerIcon = document.querySelector("#hamburgerIcon");
hamburgerIcon.addEventListener("click", () => {
  sideBar.classList.toggle("invisible");
});

// 사이드바 닫기
const sideBarClose = document.querySelector("#sidebar-close");
sideBarClose.addEventListener("click", () => {
  sideBar.classList.add("invisible");
});
