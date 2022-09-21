console.log('==========indexOf================')


const data = ['pawan', 19, 'male'];

const dataIndex = data.indexOf(19);

console.log(dataIndex);

// ================================================

function match(value) {
    if (value === 19) {
        return true

    } return false
}

const dataIndex1 = data.findIndex(match);

console.log(dataIndex1);




console.log('==========find index================')

const details = [
    { name: 'pawan', email: 'pawan@gmail.com', phoneno: 733560066, gender: 'male' },
    { name: 'ajay', email: 'ajay@gmail.com', phoneno: 702355545, gender: 'male' },
    { name: 'kirti', email: 'kirti@gmail.com', phoneno: 2323658956, gender: 'female' },
    { name: 'roshini', email: 'roshini@gmail.com', phoneno: 887799665588, gender: 'female' }
];

console.log('==========search email================')
function match1(value) {
    if (value.email == 'kirti@gmail.com') {

        return true

    } return false
}

const emailDetail = details.findIndex(match1);

console.log(details[emailDetail]);//findindex run only one time chahe kitne bi match kare y bus pahela hi match krta h

//=========filte===============

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

console.log('==========search hobbies================')

function match2(value){
const cach = value.hobbies.indexOf('dance')

if(cach != -1){
    return true
}return false
}



const voterListHobbies  = voterList.filter(match2)

console.log(voterListHobbies)

console.log('==========search chidren name================')


function match3(value){
    const cach = value.chidren.findIndex(test)
    
    if(cach != -1){
        return true
    }return false
    }

    function test(value){
    if(value.name == 'riya'){
        return true
    }return false
}

const voterListchildren  = voterList.filter(match3)

console.log(voterListchildren)


console.log('==========================')
const numberArray =[[1,2,3], [9,5,3], [8,2,3],];

function searhNumber(value){
    const cath = value.findIndex(test1)
    if(cath != -1){
        return true
    }return false
}

function test1(value){
    if(value.indexOf == 2){
        return true
    }return false
}

const searchArrayNumber = numberArray.filter(searhNumber)
console.log(searchArrayNumber)
