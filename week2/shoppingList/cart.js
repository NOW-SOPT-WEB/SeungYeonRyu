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

/** 전체 체크버튼 */
const mainCheck = document.querySelector(".entire-check");
mainCheck.addEventListener("click", () => {
  const checkedItems = document.querySelectorAll(".cartItemCheck");
  // 전체 체크버튼 체크되어 있으면 전부 체크
  mainCheck.checked
    ? checkedItems.forEach((box) => {
        box.checked = true;
      })
    : checkedItems.forEach((box) => {
        box.checked = false;
      });
});

/** 장바구니 목록 렌더링 */
const showCartList = () => {
  const cartTable = document.querySelector(".cart-table-tbody");
  cartTable.innerHTML = "";
  const storage = Object.keys(localStorage);
  storage.forEach((id) => {
    const storedItem = JSON.parse(localStorage.getItem(id));
    // 줄
    const tr = document.createElement("tr");

    /** 체크 */
    const td0 = document.createElement("td");
    const cartItemCheck = document.createElement("input");
    cartItemCheck.type = "checkbox";
    cartItemCheck.name = "myItem";
    cartItemCheck.className = "cartItemCheck";
    cartItemCheck.value = id;
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
