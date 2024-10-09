// index.js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const findOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);

console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));
