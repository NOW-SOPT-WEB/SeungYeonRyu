import cardData from "../constants/cardData";
import { getNumberofCards } from "./getNumberofCards";

/** 난이도에 맞는 카드 수 들고오기 */
export const getCards = (difficulty: number) => {
  const selectedCards = [];
  const availableCards = cardData.slice();

  for (let i = 0; i < getNumberofCards(difficulty); i++) {
    const idx = Math.floor(Math.random() * availableCards.length);
    selectedCards.push(availableCards[idx]);
    availableCards.splice(idx, 1);
  }

  return selectedCards;
};
