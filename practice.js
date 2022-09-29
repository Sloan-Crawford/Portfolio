// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//  let total = 0;
//  for (let i = 0; i < arr.length; i++) {
//   total += arr[i];
//  }
//  if (total > 100){
//   console.log(`whoa, spending too much!`);
//   return total;
//  } 
//  console.log(`nice, you're under budget`);
//  return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const stuffTotal = calculateTotal([4,5,6,7,8]);

// console.log({
//  gas: gasTotal,
//  food: foodTotal,
//  stuff: stuffTotal,
// });

// const value = 0;
// value ? console.log(`value is true`): console.log(`value is false`);;

const globalNumber = 5;

function add(num1, num2){
 const result = num1 + num2 + globalNumber;
 return result;
}

console.log(add(3,4));