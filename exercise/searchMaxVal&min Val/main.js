



const values = [3,12, 5, 32, 2, 36, 6, 1, 4, 6, 0]

let maxVal = 0
let secMaxVal = 0
let minVal= values[0];
let secMinVal = 0
let len = values.length
let index = 0

while(index<len){
    let numVal = values[index]

    if(maxVal<numVal){

        secMaxVal=maxVal
        maxVal=numVal
       
    }
    else if (minVal>numVal){
        secMinVal=minVal
        minVal=numVal
      
    }

    else{

        if(secMaxVal<numVal){
            secMaxVal=numVal
        }
    }

    index++
}

console.log('maximum value = ', maxVal)
console.log('second maximum value = ', secMaxVal)
console.log('minimum value = ', minVal)
console.log('second minimum value = ', secMinVal)