/** 난이도별 가져와야 하는 카드 수 */
export const getNumberofCards = (difficulty: number) => {
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
