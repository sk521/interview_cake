/*
Write a function that takes an array of characters and reverses the letters in-place
*/

function reverseInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;
  let temp;

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseInPlace([1,2,3,4]));
// output: [3,2,1]
