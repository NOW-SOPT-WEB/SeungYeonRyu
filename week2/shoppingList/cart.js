/** 로고 버튼 */
const logoCatBtn = document.querySelector("#homeIcon");

// 누르면 메인 페이지로 이동
logoCatBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

/** 홈으로 버튼 */
const homeBtn = document.querySelector("#toHomeBtn");
homeBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

/** 장바구니 목록 렌더링 */
const showCartList = () => {
  const cartTable = document.querySelector(".cart-table-tbody");
  cartTable.innerHTML = "";
  const storage = Object.keys(localStorage);
  storage.map((id) => {
    const storedItem = JSON.parse(localStorage.getItem(id));
    // 줄
    const tr = document.createElement("tr");

    /** 체크 */
    const td0 = document.createElement("td");
    const cartItemCheck = document.createElement("input");
    cartItemCheck.type = "checkbox";
    td0.appendChild(cartItemCheck);

    /** 상품정보 사진 */
    const td1 = document.createElement("td");

    const cartImg = document.createElement("img");
    cartImg.src = storedItem.image;
    cartImg.alt = storedItem.name;
    cartImg.className = "cart-img";
    td1.appendChild(cartImg);

    /** 상품정보 이름 */
    const td2 = document.createElement("td");
    const cartItemName = document.createElement("p");
    cartItemName.innerText = storedItem.name;
    td2.appendChild(cartItemName);

    /** 상품금액 */
    const td3 = document.createElement("td");
    const cartItemPrice = document.createElement("p");
    cartItemPrice.innerText = storedItem.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    td3.appendChild(cartItemPrice);

    /** 카테고리 */
    const td4 = document.createElement("td");
    const cartItemCategory = document.createElement("p");
    let categoryTxt = "";
    switch (storedItem.category) {
      case 0:
        categoryTxt = "과자";
        break;
      case 1:
        categoryTxt = "커피";
        break;
      case 2:
        categoryTxt = "식물";
        break;

      default:
        break;
    }
    cartItemCategory.innerText = categoryTxt;
    td4.appendChild(cartItemCategory);

    /** 비고 */
    const td5 = document.createElement("td");
    const cartItemBtn = document.createElement("button");
    cartItemBtn.innerText = "삭제";
    cartItemBtn.addEventListener("click", () => {
      removeCartItem(storedItem.id);
    });
    td5.appendChild(cartItemBtn);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    cartTable.appendChild(tr);
  });
};

/** 장바구니 아이템 삭제하기 */
const removeCartItem = (itemId) => {
  localStorage.removeItem(itemId);
  showCartList();
};

showCartList();
