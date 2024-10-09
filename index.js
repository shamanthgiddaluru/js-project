const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const findOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);

const printPattern = (rows) => {
    for (let i = 1; i <= rows; i++) {
        console.log('* '.repeat(i));
    }
};

const main = () => {
    console.log("Even Numbers:", findEvenNumbers(numbers));
    console.log("Odd Numbers:", findOddNumbers(numbers));
    printPattern(5);
};

main();
