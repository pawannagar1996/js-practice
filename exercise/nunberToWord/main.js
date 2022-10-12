

const OnceMap = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
    'nineteen']
//   const twoPlaces = [
    
//   ]

  const tensMap = [
    'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ]
 

  function covertToWord(input){

    let numberToWord = '';
    let currentValue = input;
    // console.log('$$',currentValue)

   

  
// //100 to 999
// if(currentValue>99 && currentValue<1000 ){
//     const tenPlaceValue = parseInt(currentValue / 100);
//     const index = tenPlaceValue - 1;
//         numberToWord += OnceMap[index]+' ' + 'Hundread';

//         currentValue -= tenPlaceValue * 100; 
//     }


//100 to 999
  if(currentValue>99 && currentValue<1000 ){
    const tenPlaceValue = parseInt(currentValue / 100);
    const index = tenPlaceValue - 1;
        numberToWord += OnceMap[index]+' ' + 'Hundread';
        console.log('##########################',numberToWord)
        currentValue -= tenPlaceValue * 100; 

        console.log('##########################',currentValue)
    }



// 21 to 99

  if(currentValue>20 && currentValue<100 && currentValue%10 != 0){
    const tenPlaceValue = parseInt(currentValue / 10);
    const index = tenPlaceValue - 1;
        numberToWord +=' ' + tensMap[index];

        currentValue -= tenPlaceValue * 10;

    }
//10,20,30,40,50,60,70,80,90
    if(currentValue<99 && currentValue%10 == 0){
        let index  = currentValue/10
        numberToWord += tensMap[index-1];
    }
   
//1to 19
    if(currentValue>0 && currentValue<20){
        let index = currentValue-1
       numberToWord +=' ' + OnceMap[index];
   }

   if(currentValue==0){
    numberToWord += ''
   }
  
return numberToWord
 
  }
numberToWord = covertToWord(410)
  console.log('##########################',numberToWord)