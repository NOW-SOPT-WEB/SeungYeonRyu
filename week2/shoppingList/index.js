import { category, shoppingItems } from "./data.js";

/** 아이템 렌더링 */
const showShoppingList = (items) => {
  const sectionSlot = document.querySelector(".item-slot");
  sectionSlot.innerHTML = "";

  const itemList = items ? items : shoppingItems;

  itemList.map((item) => {
    /** 상품 프레임 */
    const itemFrame = document.createElement("li");
    itemFrame.className = "item-frame flex flex-col items-center";
    itemFrame.addEventListener("click", () => {
      confirm("장바구니에 담기") ? addItemToCart(item) : null;
    });

    /** 상품 이미지 */
    const itemImg = document.createElement("img");
    itemImg.src = item.image;
    itemImg.alt = item.name;
    itemImg.className = "wish-img";

    /** 하트 아이콘 */
    const heartIcon = document.createElement("img");
    heartIcon.src = "assets/icons/heartIco.svg";
    heartIcon.alt = "heart icon";
    heartIcon.className = "wish-heart";

    /** 상품 이름 */
    const itemName = document.createElement("p");
    itemName.innerText = item.name;

    /** 상품 가격 */
    const itemPrice = document.createElement("p");
    itemPrice.innerText = item.price;

    itemFrame.appendChild(itemImg);
    itemFrame.appendChild(heartIcon);
    itemFrame.appendChild(itemName);
    itemFrame.appendChild(itemPrice);

    sectionSlot.appendChild(itemFrame);
  });
};

/** 네비바 버튼 */
const navBtn = document.querySelectorAll(".navBtn");
navBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterItems(btn.id);
  });
});

/** 아이템 필터링 */
const filterItems = (btnId) => {
  let filteredItems = shoppingItems;
  switch (btnId) {
    case "nav-snack":
      filteredItems = shoppingItems.filter((item) => {
        return item.category === category.SNACK;
      });
      break;
    case "nav-coffee":
      filteredItems = shoppingItems.filter((item) => {
        return item.category === category.COFFEE;
      });
      break;
    case "nav-plant":
      filteredItems = shoppingItems.filter((item) => {
        return item.category === category.PLANT;
      });
      break;
    default:
      filteredItems = shoppingItems;
      break;
  }
  showShoppingList(filteredItems);
};

/** 선택한 아이템 장바구니에 담기 */
const addItemToCart = (item) => {
  if (localStorage.getItem(item.id)) {
    console.log("이미 담긴 상품");
  } else {
    localStorage.setItem(item.id, JSON.stringify(item));
  }
};
showShoppingList();
