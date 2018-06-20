/*
INSTRUCTIONS:

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]


*/

function getProductsOfAllIntsExceptAtIndex(arr) {
  let resultArr = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = product;
    product *= arr[i];
  }

  product = 1;
  for (let i = resultArr.length - 1; i >= 0; i--) {
    resultArr[i] *= product;
    product *= arr[i];
  }
  return resultArr;
}

let arr = [1,2,3,4];
console.log(getProductsOfAllIntsExceptAtIndex(arr));

