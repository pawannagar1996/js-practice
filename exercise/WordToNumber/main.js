

// const numberToWordMap = {
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
//   5: 'five',
//   6: 'six',
//   7: 'seven',
//   8: 'eight',
//   9: 'nine',
//   10: 'ten',
//   11:'eleven',
//   12:'twelve',
//   13: 'thirteen',
//   14: 'fourteen',
//   15: 'fifteen',
//   16: 'sixteen',
//   17: 'seventeen',
//   18: 'eighteen',
//   19: 'nineteen',
//   20: 'twenty',
//   30: 'thirty',
//   40: 'forty',
//   50: 'fifty',
//   60: 'sixty',
//   70: 'seventy',
//   80: 'eighty',
//   90: 'ninety',
//   100: 'hundred',
//   1000: 'thousand',
//   100000: 'lakh'
// }



// function swipeKeyValue(key, value, resultObject) {
//   resultObject[value] = parseInt(key)
// }

// const wordToNumberMap = {};
// // NOTE: for in loop used for object
// for(let key in numberToWordMap) {
//   // console.log('what is in key ', key)
//   // console.log('get value with key ', numberToWordMap[key])
//   //console.log('--------------')
//   const value = numberToWordMap[key]
//   swipeKeyValue(key, value, wordToNumberMap);
// }
// // console.log('converted')
// // console.log(wordToNumberMap)

// function convertToNumber(input){
//   // NOTE: string split method return array based on separator provided
//   const splittedValues = input.split(' ')
//   console.log(' -splittedValues -');
//   console.log(splittedValues);
 
 
//   let len = splittedValues.length

//   console.log(splittedValues[0]);

//   let wordStore = [];
//   let outdor = 0 ;
  
// console.log(wordToNumberMap)

//  let count = wordToNumberMap.length

//  console.log(count)

//   while(outdor<wordToNumberMap.length){

//     const searchLenght = wordToNumberMap[outdor];

//     console.log(searchLenght)


//     if(searchLenght.splittedValues[0]){
//       wordStore.push(searchLenght)
//      }
//     outdor++
//   }

// // console.log(wordStore)



// }



const numberToWordMap5 = {


  one : 1,
  two : 2,
  three: 3,

  hunderd :100,

}

// function swipeKeyValue5(key5, value5, resultObject5) {
//   resultObject5[value5] = parseInt(key5)
// }

// const wordToNumberMap6 = {};
// // NOTE: for in loop used for object
// for(let key5 in numberToWordMap5) {
//   // console.log('what is in key ', key)
//   // console.log('get value with key ', numberToWordMap[key])
//   //console.log('--------------')
//   const value5 = numberToWordMap5[key5]
//   swipeKeyValue5(key5, value5, wordToNumberMap6);
// }
// // console.log('converted')
// // console.log(wordToNumberMap)

function convertToNumber5(input5){
  // NOTE: string split method return array based on separator provided
  const splittedValues5 = input5.split(' ')
  console.log(' -splittedValues -');
  console.log(splittedValues5);

let wordStore = []
let outdor = 0;
let len = numberToWordMap5.length;

console.log(len);

  while(outdor<len){
    
        const searchLenght = numberToWordMap5[outdor];
        
           console.log(searchLenght)

        if(searchLenght.splittedValues[0]){

          wordStore.push(searchLenght)
         }
        outdor++
      }

      console.log(wordStore)
}

const numberValue5 = convertToNumber5('one hundred ten') // 110
