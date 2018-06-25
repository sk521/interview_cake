/*
We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
*/


var myArray = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];


function mergeSortedArrays(myArray, alicesArray) {
  let mergedArr = [];
  let currIdxMyArr = 0;
  let currIdxAliceArr = 0;
  let mergedArrIdx = 0;

  while (mergedArrIdx < (myArray.length + alicesArray.length)) {
    let isMyArrExhausted = currIdxMyArr >= myArray.length;
    let isAliceArrExhausted = currIdxAliceArr >= alicesArray.length;

    if (!isMyArrExhausted && (isAliceArrExhausted || myArray[currIdxMyArr] < alicesArray[currIdxAliceArr])) {
      mergedArr[mergedArrIdx] = myArray[currIdxMyArr];
      currIdxMyArr++;
    } else {
      mergedArr[mergedArrIdx] = alicesArray[currIdxAliceArr];
      currIdxAliceArr++;
    }
    mergedArrIdx++
  }

  return mergedArr;
}

console.log(mergeSortedArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
