
//================= splice =======================


// delete

const spliceArray = [1, 2, 5, 7, 8, 10, 12, 24];
spliceArray.splice(2, 3);
console.log(spliceArray);

console.log('==========================================================');

// add
const spliceArray1 = [1, 2, 5, 7, 8, 10, 12, 24];
spliceArray1 .splice(0, 0, 555,666);
console.log(spliceArray1);


spliceArray1 .splice(100, 0, 555,666);
console.log(spliceArray1);

console.log('==========================================================');

// delete and add 
const spliceArray2 = ['apple', 'mango', 'papaya','pineapple', 'berry']
const numItm = spliceArray2.indexOf('papaya');// to get number of index
console.log(numItm)// check index f knowledge

spliceArray2.splice(numItm, 1, 'papita' )
console.log(spliceArray2);

// delete last number

const spliceArray3 = [1, 2, 5, 7, 8, 10, 12, 24];
const lastNum = spliceArray3.length - 5 // jitne hatane h uthe hta skte h
console.log(lastNum) // jitne bache h utne bataega kaat k

spliceArray3.splice(lastNum)
console.log(spliceArray3)

// delete starting string number (delete starting 2 string)

const spliceArray4 = ['html', 'css', 'js','python', 'php', 'mysql'];
spliceArray4.splice(0,2)
console.log(spliceArray4)



console.log('---------------------slice-------------------------------')
// slice - ****do not modify actual array
// extract middle array 6, 4
const sliceArray = [7, 3, 6, 4, 2, 10];
const slicedArray = sliceArray.slice(2, 4); // strt value, last value (start value satart value ko pakadh leta h lekin last value last value ka nahi pakadhti use chhodh deti h)
console.log('actual array', sliceArray);
console.log('sliced array', slicedArray);

// starting value print
const sliceArray1 = ['salman', 'sharukh', 'amir', 'aksay', 'john'];
const slicedArray1 = sliceArray1.slice(0, 3)
console.log(slicedArray1)

// last value print
const sliceArray2 = ['salman', 'sharukh', 'amir', 'aksay', 'john'];
const slicedArray2 = sliceArray2.length - 1 // this print last string

console.log(slicedArray2)
const lastValSlice = sliceArray2.slice(slicedArray2)
console.log(lastValSlice)

// last 2 string value print

const sliceArray3 = ['salman', 'sharukh', 'amir', 'aksay', 'john'];
const startArrayVal1 = sliceArray3.length - 2 // this print last string
const lasArrayVal2 = sliceArray3.length // this print last string

console.log(startArrayVal1)
console.log(lasArrayVal2)
const lastValSlice1 = sliceArray3.slice(startArrayVal1,lasArrayVal2 )
console.log(lastValSlice1)