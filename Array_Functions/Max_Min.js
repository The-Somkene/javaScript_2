// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function maxMin(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let result = [min, max];
  return result;
}

console.log(maxMin([13, 7, 20, 10, 40, 90]));
