
let Num = 0
while (Num <= 5) {
    if (Num <= 5) {
    }
    console.log(Num)
    Num++
}
console.log('=========================')


let outerIndex = 0;

while (outerIndex <= 5) {
    let str = '';
    innerIndex = 0;
    while (innerIndex <= outerIndex) {
        str += '* '
        innerIndex++
    }
    console.log(str)
    outerIndex++
}


console.log('=========================')


// outerIndex = 0;

// while (outerIndex <= 5) {
//     let str1 = '';
//     let str = '*****';
//     innerIndex = 0;
//     innerIndex2 = 0;
//     while (innerIndex <= outerIndex) {
//         str1 = str.length - innerIndex2
//         str.splice(str1)
//         break
//         innerIndex++
//         innerIndex2++
//     }
//     console.log(str1)
//     outerIndex += 1
// }




console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')


// *****
// ****
// ***
// **
// *

let outerIndex3 = 0;
while (outerIndex3 <= 5) {
    let str2 = ''
    let innerIndex = 5;
    while (outerIndex3 < innerIndex) {
        str2 += '* '
        innerIndex--
    }
    console.log(str2)
    outerIndex3++
}

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

//    *
//   **
//  ***
// ****
//*****

let outerIndex6 = 0;
while (outerIndex6 < 5) {
    let str6 = ''
    let innerIndex = 0;
    while (innerIndex <= 4) {
        if (innerIndex <= 3) { str6 += '#' }
        else if (innerIndex === 4) { str6 += '*' }
        innerIndex++
    }
    console.log(str6)
    outerIndex6++
}

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
// *
// *$
// *$*
// *$*$*
// *$*$*$*

let outerIndex4 = 0;

while (outerIndex4 <= 5) {
    let str3 = '';
    let innerIndex = 0;
    while (innerIndex <= outerIndex4) {
        if (innerIndex % 2 === 0) {
            str3 += '*'
        } else { str3 += '$' }
        innerIndex++
    }
    console.log(str3)
    outerIndex4++
}



console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
// $
// **
// **$
// **$*
// **$**
// **$**$


let add = 3 % 3
console.log(add)
let outerIndex5 = 0;

while (outerIndex5 <= 6) {
    let str4 = '';
    let innerIndex = 0;
    while (innerIndex <= outerIndex5) {
        if (innerIndex % 3 === 0) {
            str4 += '$'
        } else { str4 += '*' }
        innerIndex++
    }
    console.log(str4)
    outerIndex5++
}