// Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  let result = n;
  for (let i = n - 1; i > 0; i--) {
    result = result * i;
  }
  return result;
}

console.log(factorial(6));
