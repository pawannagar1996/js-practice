


const const spliceArray = [1, 2, 5, 7, 8, 10, 12, 24];

// -- add 9 between 8, 10
console.log('------------- add 9 between 8, 10 --------------------');
const indexOf10 = spliceArray.indexOf(10);
console.log('index of 10 is', indexOf10);
spliceArray.splice(indexOf10, 0, 9);
console.log(spliceArray)