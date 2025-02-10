// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + "" + reversed;
  }
  return reversed;
}
console.log(reverseString("Hello Dan"));
