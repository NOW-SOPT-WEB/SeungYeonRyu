/** 로고 버튼 */
const logoCatBtn = document.querySelector("#homeIcon");

const homeAddr = "./index.html";

/** 홈으로 이동 */
const navigateHome = () => {
  window.location.href = homeAddr;
};

// 누르면 메인 페이지로 이동
logoCatBtn.addEventListener("click", navigateHome);

/** 홈으로 버튼 */
const homeBtn = document.querySelector("#toHomeBtn");
homeBtn.addEventListener("click", navigateHome);

/** 전체 체크버튼 */
const mainCheck = document.querySelector(".entire-check");
mainCheck.addEventListener("click", () => {
  const checkedItems = document.querySelectorAll(".cartItemCheck");
  // 전체 체크버튼 체크되어 있으면 전부 체크
  checkedItems.forEach((box) => (box.checked = mainCheck.checked));
});

/** 카테고리 인덱스로 이름 구하기 */
const getCategoryName = (category) => {
  switch (category) {
    case 0:
      return "과자";
    case 1:
      return "커피";
    case 2:
      return "식물";

    default:
      console.log("failed to get category name");
      break;
  }
};

/** 장바구니 목록 렌더링 */
const showCartList = () => {
  const cartTable = document.querySelector(".cart-table-tbody");
  cartTable.innerHTML = "";
  const storage = Object.keys(localStorage);
  const cartItems = storage
    .map((id) => {
      const storedItem = JSON.parse(localStorage.getItem(id));
      const cartItemContent = `
    <tr>
          <td>
            <input
              type="checkbox"
              name="myItem"
              class="cartItemCheck"
              value="${id}"
            />
          </td>
          <td>
            <img
              src="${storedItem.image}"
              alt="${storedItem.name}"
              class="cart-img"
            />
          </td>
          <td><p>${storedItem.name}</p></td>
          <td>
            <p>
              ${storedItem.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </td>
          <td><p>${getCategoryName(storedItem.category)}</p></td>
          <td><button id="${
            storedItem.id
          }" type="button" class="cart-removeBtn">삭제</button></td>
        </tr>
    `;
      return cartItemContent;
    })
    .join("");

  cartTable.innerHTML = cartItems;
  const cartItemBtn = document.querySelectorAll(".cart-removeBtn");
  cartItemBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeCartItem(btn.id);
    });
  });
};

/** 장바구니 아이템 삭제하기 */
const removeCartItem = (itemId) => {
  localStorage.removeItem(itemId);
  showCartList();
};

/** 구매하기 모달 */
const purChaseModal = document.querySelector(".purchase-modal");

/** 구매하기 모달 닫기버튼 */
const purchaseModalCloseBtn = document.querySelector(
  ".purchase-modal-closeBtn"
);
purchaseModalCloseBtn.addEventListener("click", () => {
  purChaseModal.classList.add("invisible");
});

/** 구매하기 모달 열기버튼 */
const purchaseModalOpenBtn = document.querySelector("#openPurchaseModal");
purchaseModalOpenBtn.addEventListener("click", () => {
  purChaseModal.classList.remove("invisible");
  itemSlot.innerHTML = "";
  renderModalItems(getCheckedItem());
});

/** 체크된 아이템 추가할 리스트 */
const itemSlot = document.querySelector(".purchase-itemslot");

/** 체크된 상품 목록 가져오기 */
const getCheckedItem = () => {
  const query = 'input[name="myItem"]:checked';
  const checkedItems = document.querySelectorAll(query);
  return checkedItems;
};

/** 모달 내 상품 렌더 */
const renderModalItems = (checkedItems) => {
  let totalPrice = 0;

  checkedItems.length === 0
    ? alert("상품을 선택해 주세요") & purChaseModal.classList.add("invisible")
    : checkedItems.forEach((item) => {
        const checkedItem = JSON.parse(localStorage.getItem(item.value));
        const itemFrame = document.createElement("li");

        /** 체크된 상품 이미지 */
        const itemImg = document.createElement("img");
        itemImg.src = checkedItem.image;
        itemImg.alt = checkedItem.name;

        /** 체크된 상품 이름 */
        const itemName = document.createElement("p");
        itemName.innerText = checkedItem.name;

        /** 체크된 상품 가격 */
        const cartItemPrice = document.createElement("p");
        cartItemPrice.innerText = checkedItem.price;
        totalPrice += checkedItem.price;

        itemFrame.appendChild(itemImg);
        itemFrame.appendChild(itemName);
        itemFrame.appendChild(cartItemPrice);
        itemSlot.appendChild(itemFrame);
      });

  /** 총 금액 합계 */
  const totalPriceTxt = document.querySelector(".purchase-totalprice");
  totalPriceTxt.innerText =
    "총금액 : " +
    totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    "원";
};

/** 모달 내 구매하기 버튼 */
const purchaseBtn = document.querySelector("#purchaseBtn");
purchaseBtn.addEventListener("click", () => {
  purchase();
  alert("구매완료");
  purChaseModal.classList.add("invisible");
  mainCheck.checked = false;
  showCartList();
});

/** 구매하기 */
const purchase = () => {
  const itemList = getCheckedItem();
  itemList.forEach((item) => {
    localStorage.removeItem(item.value);
  });
};
showCartList();
