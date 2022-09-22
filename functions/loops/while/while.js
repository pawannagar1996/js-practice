const voterList = [
    {
        name: 'pawan', hobbies: ['cricet', 'dance'],
        chidren: [
            { name: 'pinki', gender: 'female', age: 15 },
            { name: 'deepak', gender: 'male', age: 5 }
        ]
    },
    {
        name: 'nakul', hobbies: ['cricet', 'singing'],
        chidren: [
            { name: 'riya', gender: 'female', age: 2 },
            { name: 'chochu', gender: 'male', age: 18 }
        ]
    },
    {
        name: 'sivani', hobbies: ['wwe', 'dance'],
        chidren: [
            { name: 'chinki', gender: 'female', age: 1 },
            { name: 'renu', gender: 'female', age: 6 }
        ]
    }
];


let counter = 0; // initialization
while(counter < 5) { // condition
  console.log('counter without break', counter);
  counter += 1; // increment
}

console.log('search name');


let listName = [];
let index = 0 ;

while(index < voterList.length){

    const searchLenght = voterList[index];

    console.log('voterlist',searchLenght)

    if(searchLenght.name == 'nakul'){

listName.push(searchLenght)
    }

    index += 1;

}

console.log(listName)

let listName1 = [];
index = 0 ;

while(index < voterList.length){

    const searchLenght1 = voterList[index];

    console.log('voterlist1',searchLenght1)

    const searchHobbies = searchLenght1.hobbies.indexOf('singing')

    if(searchHobbies >= 0){

listName1.push(searchLenght1)
    }

    index += 1;

}


console.log('=============hobbies============');


console.log(listName1)


//=============================search obrect me object


let listName2 = [];
index = 0 ;

while(index < voterList.length){

    const searchLenght2 = voterList[index];

    // console.log('voterlist1',searchLenght2)

    const childrenList = searchLenght2.chidren

    // console.log('childre ist', childrenList)

    const childrenListName = childrenList.length

    console.log('childre list2', childrenListName)

    const childrensearch = childrenListName.name('riya')


    if(childrensearch >= 0){

listName2.push(searchLenght2)
    }

    index += 1;

}


// console.log('=============hobbies============');


// console.log(listName1)