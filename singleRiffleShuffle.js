function isSingleRiffle(half1, half2, shuffledDeck) {
  let half1Idx = 0;
  let half2Idx = 0;
  let half1MaxIdx = half1.length - 1;
  let half2MaxIdx = half2.length - 1;

  for (let i = 0; i < shuffledDeck.length; i++) {
    let card = shuffledDeck[i];

    if (half1Idx <= half1MaxIdx && card === half1[half1Idx]) {
      half1Idx++;
    } else if (half2Idx <= half2MaxIdx && card === half2[half2Idx]) {
      half2Idx++;
    } else {
      return false;
    }
  }

  return true;
}
