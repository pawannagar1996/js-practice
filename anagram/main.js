const wordOne = 'race';
const wordTwo = 'care';

function stringToObjectMap(word) {
    const wordOneObj = {}
    const len = word.length;
    let index = 0;
    while (index < len) {
        const char = word.charAt(index)
        // console.log('char ', char, output[char])
        if (wordOneObj[char]) {
            wordOneObj[char] += 1;
        } else {
            wordOneObj[char] = 1;
        }
        index++;
    }
    return wordOneObj;
}

const objectMapOne = stringToObjectMap(wordOne);
console.log(objectMapOne);



function stringToObjectMap2(word) {
    const wordTwoObj = {}
    const len = word.length;
    let index = 0;
    while (index < len) {
        const char = word.charAt(index)
        // console.log('char ', char, output[char])
        if (wordTwoObj[char]) {
            wordTwoObj[char] += 1;
        } else {
            wordTwoObj[char] = 1;
        }
        index++;
    }
    return wordTwoObj;
}

const objectMapOne2 = stringToObjectMap2(wordTwo);
console.log(objectMapOne2);











