import cardData from "../constants/cardData";

/** 난이도별 가져와야 하는 카드 수 */
const getNumberofCards = (difficulty: number) => {
  switch (difficulty) {
    case 1:
      // easy, 5
      return 5;
    case 2:
      // normal, 7
      return 7;
    case 3:
      // hard, 9
      return 9;

    default:
      console.log("error getting number of cards");
      return 1;
  }
};

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
