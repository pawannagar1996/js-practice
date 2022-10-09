
const list = ['p', 'a', 'w'];


//       per sting +('pp', 'aa', 'ww')
function mapLogic1(value){

    return value + value
}

const result1 = list.map(mapLogic1);

console.log(result1)
// console.log(list)



//       <li>p</li> <li>a</li> <li>w</li>)

function mapLogic2(value){


    return '<li>'+value+'</li>';
}

const result2 = list.map(mapLogic2);

console.log(result2)