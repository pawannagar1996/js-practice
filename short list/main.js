
console.log('---------------------sort--------------------------------')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//NOTE: ***sort function update the same array
//NOTE: ***sort function by default convert every element to string and then compare.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log('months ', months)

const array1 = [10000, 30, 4, 21, 1];
array1.sort()
console.log('array1 ', array1)
/*
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

const array2 = [10000, 30, 4, 21, 1];
function compare(a, b){
  //console.log('what is a and b ', a, b)
  if(a < b){
    return -1;
  }
  if(a > b) {
    return 1;
  }
  return 0;
}
array2.sort(compare);
console.log('array2 ', array2);

const array3 = [10000, 30, 4, 21, 1];
array3.sort((a, b) => b - a);
console.log('array3 ', array3);



const arrayOne = [
    {name: 'pervez', age:37 },
    {name: 'arif', age:25 },
    {name: 'boby', age:33 },
    {name: 'sunil', age:30 },
    {name: 'nakul', age:24 },
    {name: 'aakash', age:26 },
  ];

  function sortByAge(obj1, obj2) {
    if(obj1.name < obj2.name){
        return -1;
      }
      if(obj1.name > obj2.name){
        return 1;
      }
      return 0;
  }
  let sortByAge2 = arrayOne.sort(sortByAge)  ;

//   console.log('#####',sortByAge2)

  
  console.log('Array one after sorting');
  console.log(sortByAge2);
  // console.log('Array one after sorting');
  // console.log(sortByAge2);
