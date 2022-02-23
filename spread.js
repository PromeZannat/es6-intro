const numbers = [23, 45, 12, 76, 44];
console.log(...numbers);

const max = Math.max(23, 65, 78);
const maxArrays = Math.max(...numbers);


numbers.push(101);
console.log(numbers);
console.log(max, maxArrays);