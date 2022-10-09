

// how work map , filter etc


const mapArray = [2, 44, 50, 60];


function predicateOne(value) {
    return value + value;
}

function pollyFill1(arr, callback) {
    let newArray = []
    let len = arr.length
    
   let index = 0;
    while (index < len) {
        const value = arr[index];
        const changeValue = callback(value)
        newArray.push(changeValue);
        index++
    }
    return newArray
}
const resultMapArrayOne = pollyFill1(mapArray, predicateOne);
console.log('result map array one ', resultMapArrayOne);
  


//  search male and female

const genderList=['male', 'female', 'female', 'male', 'female', 'female', ]

function isMale(value){
    if(value == 'male'){
     return true
    }return false
}


function pollyFill2(arr, callback) {

    let newArray =[];
    let len = arr.length;
    let index = 0;

    while(index<len){
        let value = arr[index]
        let getValue = callback(value)

        newArray.push(getValue)

        index++
    }

    return newArray
}

const resultMapArrayTwo = pollyFill2(genderList, isMale);
console.log(resultMapArrayTwo)