// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(str) {
  let arr = str.split(" ");
  let capWords = [];
  for (const item of arr) {
    capWords.push(item[0].toUpperCase() + item.slice(1));
  }
  return capWords.join(" ");
}

console.log(capitalizeWords("this is a test string"));
