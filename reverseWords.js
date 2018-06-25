/*
Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in-place.
*/

function reverseWords(arr) {
  reverseChar(arr, 0, arr.length - 1);

  let currentWordStartIndex = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] === ' ') {

      reverseChar(arr, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}


// helper function that reverses all characters in the arr;
function reverseChar(word, start, end) {
  while (start < end) {
    let temp = word[start];
    word[start] = word[end];
    word[end] = temp;
    start++;
    end--;
  }
}

var message = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'];

reverseWords(message);

console.log(message.join(''));
// prints: 'steal pound cake'
