
let Num  = 0


while(Num <= 5){

   if(Num <= 5){

   }
    console.log(Num)
    Num++
}


let outerIndex = 0;

while(outerIndex <= 5){

    let str = '';
    innerIndex = 0;

    while(innerIndex <=  outerIndex){
        str += '* '
        innerIndex++
    }
    console.log(str)

    outerIndex++
}



outerIndex = 0;

while(outerIndex <= 5){

    let str = '*****';
    innerIndex = 0;

    while(innerIndex <=  outerIndex){
        
       let str1 = str.length - 1

       str.splice(str1) 
        innerIndex++
    }
    console.log(str)

    outerIndex++
}