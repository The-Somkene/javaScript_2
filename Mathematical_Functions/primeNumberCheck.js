// Prime Number Check: Create a function to check if a number is prime or not.
function primeNumCheck(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return "not a prime number";
    }
  }
  return "its a prime number";
}

console.log(primeNumCheck(25));


// function primeNumber(n){
// for(let i = 2; i < n/2; i++){
//     if(n%i===0){
//         return "is not prime"
//     }
// }
// return "is prime"
// }

// console.log(primeNumber(25));
