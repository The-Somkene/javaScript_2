// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filtered(arr) {
  let newArr = [];
  for (const item of arr) {
    if (item < 25) {
      newArr.push(item);
    }
  }
  return newArr;
}

filtered([34, 55, 23, 9, 19, 10]);

// function filtered(arr, condition) {
//   console.log(condition);

//   let newArr = [];
//   for (const item of arr) {
//     if (condition(item)) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

// // arr.filter((a)=>a%2===0)

// filtered([34, 22, 55, 16, 8, 12], function (a) {
//   return a < 25;
// });
