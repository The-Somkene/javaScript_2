// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumOfArray([13, 7, 20, 10, 40]));
