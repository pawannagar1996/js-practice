//variables




// number

let x = 25;

let y = 2;

let z;

z = x + y;

console.log(typeof z);
console.log(z);


x = 10.123456789;

console.log(x);
console.log(x.toFixed(2));
console.log(x.toFixed(4));


// string


const personName = 'Pawan Nagar'

console.log(typeof personName);
console.log(personName);

let bigLenght = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi, velit consequuntur facere provident aperiam accusamus accusantium maxime veritatis cum labore nemo magni facilis iure distinctio, voluptate iusto. Molestiae debitis cumque doloremque.
`

console.log(bigLenght);
console.log('bg string lenght',bigLenght.length);

bigLenght = bigLenght.trim();

console.log('bg string lenght trim',bigLenght.length);

bigLenght = bigLenght.toUpperCase();

console.log('bg string lenght Upper',bigLenght);


bigLenght = bigLenght.toLowerCase();

console.log('bg string lenght lower',bigLenght);


// string



let a = true;

console.log(typeof a);
console.log(a);



// array


const numberArray = [1, 2, 3, 4];

console.log(typeof numberArray);
console.log(numberArray);

const stringArray = ['pawan', 'nagar'];

console.log(stringArray);

const booleanArray = [true, false];

console.log(booleanArray);


//object

const checkObject = {name:'pawan',}

console.log(typeof checkObject);
console.log(checkObject);

const form = {
    name : 'pawan',
    last_name : 'nagar',
    address : {
        block : 'C = 308 j j coloeny Tigri',
        Landmark : 'SBI bank',
        pincode : '110080'
    },

    Gender : 'Male',

    Hobbies : ['sleeping','wathing movies']

}

console.log(form);