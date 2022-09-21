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

let nameList=[]

let index= 0;
while(index < voterList.length){
    const voterName = voterList[index];

    if(voterName.name == 'sivani'){
        nameList.push(index);
    }
    counter+=1;
}
console.log(nameList);

