import { Card } from "../types";

/** 카드 섞기 */
export const shuffleCards = (cards: Card[]) => {
  const shuffledCard = cards.slice();
  for (let i = shuffledCard.length - 1; i > 0; i--) {
    const idx = Math.floor(Math.random() * (i + 1));
    [shuffledCard[i], shuffledCard[idx]] = [shuffledCard[idx], shuffledCard[i]];
  }
  return shuffledCard;
};
