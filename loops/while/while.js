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
            { name: 'renu', gender: 'female', age: 6 },
            { name: 'tinki', gender: 'female', age: 9 }
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
console.log('search obrect me object')


const listName3 = [];
let index2 = 0;

const listLen = voterList.length;

while (index2 < listLen){
    const listLoops = voterList[index2];
    // console.log('list',listLoops)
    const hobbieslistLoops = listLoops.chidren;
    const hobbieslistLoopslen = hobbieslistLoops.length
    // console.log('pawan',hobbieslistLoopslen);
    let index3 = 0
    while(index3  < hobbieslistLoopslen){
        const chidrenLoops = hobbieslistLoops[index3]
        if(chidrenLoops.name == 'chinki'){
            listName3.push(listLoops)
                }
                index3++
    }
    index2 +=1
}
console.log('nagar',listName3 )

