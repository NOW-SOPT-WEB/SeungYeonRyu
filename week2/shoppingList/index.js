import { shoppingItems } from "./data.js";

/** 로고 버튼 */
const logoCatBtn = document.querySelector("#homeIcon");

// 누르면 메인 페이지로 이동
logoCatBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

/** 아이템 렌더링 */
const showShoppingList = () => {
  const sectionSlot = document.querySelector(".item-slot");
  sectionSlot.innerHTML = "";

  shoppingItems.map((item) => {
    /** 상품 프레임 */
    const itemFrame = document.createElement("li");
    itemFrame.className = "item-frame flex flex-col items-center";

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

showShoppingList();
