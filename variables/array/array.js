
//================= splice =======================


// delete

const spliceArray = [1, 2, 5, 7, 8, 10, 12, 24];
spliceArray.splice(2, 3);
console.log(spliceArray);

console.log('==========================================================');

// add

const spliceArray1 = [1, 2, 5, 7, 8, 10, 12, 24];
spliceArray1.splice(0, 0, 555, 666);
console.log(spliceArray1);


spliceArray1.splice(100, 0, 555, 666);
console.log(spliceArray1);

console.log('==========================================================');

// delete and add 
const spliceArray2 = ['apple', 'mango', 'papaya', 'pineapple', 'berry']
const numItm = spliceArray2.indexOf('papaya');// to get number of index
console.log(numItm)// check index f knowledge

spliceArray2.splice(numItm, 1, 'papita')
console.log(spliceArray2);

// delete last number

const spliceArray3 = [1, 2, 5, 7, 8, 10, 12, 24];
const lastNum = spliceArray3.length - 5 // jitne hatane h uthe hta skte h
console.log(lastNum) // jitne bache h utne bataega kaat k

spliceArray3.splice(lastNum)
console.log(spliceArray3)

// delete starting string number (delete starting 2 string)

const spliceArray4 = ['html', 'css', 'js', 'python', 'php', 'mysql'];
spliceArray4.splice(0, 2)
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
const lastValSlice1 = sliceArray3.slice(startArrayVal1, lasArrayVal2)
console.log(lastValSlice1)



console.log('============ find of ======================')



const person = [{
    Name: 'suraj', voterid: '545478',
    address: [{
        localaddress: { houseo: 'W 88 khanpur new delhi', pinno: 110029 },
        permanentaddress: { houseno: 'O 447 saket new delhi', pinno: 110018 }
    }],
    numbers: [{ phoneno: 1122558877, officeno: 0112222225544 }],
    Email: 'suraj@gmail.com',
    gender: 'male',
    childreen: [
        { name: 'sruti', age: 5 },
        { name: 'shanti', age: 5 },
        { name: 'radha', age: 5 },

    ]
},


{
    Name: 'Pawan', voterid: '5552222111',
    address: [{
        localaddress: { houseo: 'd 555 ito new delhi', pinno: 110029 },
        permanentaddress: { houseno: 'E 212 devli new delhi', pinno: 110062 }
    }],
    numbers: [{ phoneno: 3333666655, officeno: 01155554444 }],
    Email: 'pawan@gmail.com',
    gender: 'male',
    childreen: [
        { name: 'pankaj', age: 5 },
        { name: 'hemant', age: 5 },
        { name: 'arun', age: 5 },

    ]
},
{
    Name: 'nakul', voterid: 'sxxfc555',
    address: {
        localaddress: { houseo: 'c 55 devli new delhi', pinno: 110062 },
        permanentaddress: { houseno: 'r 5 sangam new delhi', pinno: 110080 }
    },
    numbers: [{ phoneno: 8888888888, officeno: 01174474 }],
    Email: 'nakul@gmail.com',
    gender: 'male',
    childreen: [
        { name: 'chiku', age: 5 },
        { name: 'aalu', age: 5 },
        { name: 'lashan', age: 15 },

    ]
},
{
    Name: 'pinki', voterid: 's5465c555',
    address: {
        localaddress: { houseo: 'DE 555 devli new delhi', pinno: 110088 },
        permanentaddress: { houseno: 'EWR 23232 sangam new delhi', pinno: 110099 }
    },
    numbers: [{ phoneno: 89895956, officeno: 011111445 }],
    Email: 'pinki@gmail.com',
    gender: 'female',
    childreen: [
        { name: 'ronak', age: 18 },
        { name: 'shalu', age: 15 },
        { name: 'daniya', age: 15 },

    ]
},
{
    Name: 'jyoti', voterid: 'ddd333665',
    address: {
        localaddress: { houseo: 'SWE 789 khanpur new delhi', pinno: 1100855 },
        permanentaddress: { houseno: 'IOO 356 sangam new delhi', pinno: 110096 }
    },
    numbers: [{ phoneno: 259987522, officeno: 011215745123 }],
    Email: 'pinki@gmail.com',
    gender: 'female',
    childreen: [
        { name: 'ronak', age: 18 },
        { name: 'shalu', age: 15 },
        { name: 'daniya', age: 15 },

    ]
}

];
console.log('==========================female/================================');

console.log(person);

function match(value) {

    if (value.gender === 'female') {
        return true
    }
    return false;
}



const personFind = person.filter(match);

// const personphone = personFind.address.localaddress

console.log(personFind);




console.log('==========================male/================================');



const person1 = [{
    Name: 'suraj', voterid: '545478',
    address: [{
        localaddress: { houseo: 'W 88 khanpur new delhi', pinno: 110029 },
        permanentaddress: { houseno: 'O 447 saket new delhi', pinno: 110018 }
    }],
    numbers: [{ phoneno: 1122558877, officeno: 0112222225544 }],
    Email: 'suraj@gmail.com',
    gender: 'male',
    childreen: [
        { name: 'sruti', age: 5 },
        { name: 'shanti', age: 5 },
        { name: 'radha', age: 5 },

    ],
    hobbies: ['criket', 'football']
},


{
    Name: 'Pawan', voterid: '5552222111',
    address: [{
        localaddress: { houseo: 'd 555 ito new delhi', pinno: 110029 },
        permanentaddress: { houseno: 'E 212 devli new delhi', pinno: 110062 }
    }],
    numbers: [{ phoneno: 3333666655, officeno: 01155554444 }],
    Email: 'pawan@gmail.com',
    gender: 'male',
    childreen: [
        { name: 'pankaj', age: 5 },
        { name: 'hemant', age: 5 },
        { name: 'arun', age: 5 },

    ],
    hobbies: ['criket', 'dance']
},
{
    Name: 'nakul', voterid: 'sxxfc555',
    address: {
        localaddress: { houseo: 'c 55 devli new delhi', pinno: 110062 },
        permanentaddress: { houseno: 'r 5 sangam new delhi', pinno: 110080 }
    },
    numbers: [{ phoneno: 8888888888, officeno: 01174474 }],
    Email: 'nakul@gmail.com',
    gender: 'male',
    childreen: [
        { name: 'chiku', age: 5 },
        { name: 'aalu', age: 5 },
        { name: 'lashan', age: 15 },

    ],
    hobbies: ['singing', 'movies']
},
{
    Name: 'pinki', voterid: 's5465c555',
    address: {
        localaddress: { houseo: 'DE 555 devli new delhi', pinno: 110088 },
        permanentaddress: { houseno: 'EWR 23232 sangam new delhi', pinno: 110099 }
    },
    numbers: [{ phoneno: 89895956, officeno: 011111445 }],
    Email: 'pinki@gmail.com',
    gender: 'female',
    childreen: [
        { name: 'ronak', age: 18 },
        { name: 'shalu', age: 15 },
        { name: 'daniya', age: 15 },

    ],
    hobbies: ['cooking', 'dance']
},
{
    Name: 'jyoti', voterid: 'ddd333665',
    address: {
        localaddress: { houseo: 'SWE 789 khanpur new delhi', pinno: 1100855 },
        permanentaddress: { houseno: 'IOO 356 sangam new delhi', pinno: 110096 }
    },
    numbers: [{ phoneno: 259987522, officeno: 011215745123 }],
    Email: 'pinki@gmail.com',
    gender: 'female',
    childreen: [
        { name: 'ronak', age: 18 },
        { name: 'shalu', age: 15 },
        { name: 'daniya', age: 15 },

    ],
    hobbies: ['wwe', 'boxing']
}

];


console.log(person1);


// function match(value) {

//     if (value.gender === 'male') {
//         return true
//     }
//     return false;
// }



const personFind1 = person1.filter(match => match.gender == 'male');

// const personphone = personFind.address.localaddress

console.log(personFind1);



// function match(value) {

//     if (value.childreen.Name === 'ronak') {
//         return true
//     }
//     return false;
// }

// const personFind2 = person1.filter(match);

// console.log(personFind2);





function match(value) {
    const child = value.childreen.findIndex(findChildren)
    if (child != -1){
        return true
    }

    return false;
}

function findChildren(value){
    if ( value.name =='ronak'){
        return true
    }
    return false;
}

const personFind3 = person1.filter(match);

console.log(personFind3);



console.log('==========pawancode====================================');


// const hobbiesArray =
// {name:'suraj' , hobbies:'cricket'};
   
// // console.log(hobbiesArray);

// function hobbie1 (value){
   
//     if( value.name === 'suraj'){
//         return true;
//     }
//     return false;
// }

// const adharFemaleUsers = hobbiesArray.filter(hobbie1);

// console.log(adharFemaleUsers);




// function match(value){
//     if(value.name === 'pawan'){
//         return true
//     }return false
// }

// const dddgg = pawancode.filter(match)
//  console.log(dddgg);



// const personFind44 = pawancode.findIndex(match);

// console.log(personFind44);


