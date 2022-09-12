











console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

function fizzbuzzone(num) {
    if (num % 3 === 0 && num % 5 === 0) { console.log('fizzbuzz'); }
    else if (num % 3 === 0) { console.log('fizz'); }
    else if (num % 5 === 0) { console.log('buzz'); }
    else { console.log('nothing'); }

}

fizzbuzzone(3)
fizzbuzzone(5)
fizzbuzzone(15)
fizzbuzzone(22)




console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');




console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');



function fizzbuzztwo(num) {

    let result = num % 3 === 0 ? 'fizz' : '';

    result += num % 5 === 0 ? 'buzz' : '';

    console.log(result);

}

fizzbuzztwo(3)
fizzbuzztwo(5)
fizzbuzztwo(15)
fizzbuzztwo(22)


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');


const check = (div, num, val) => (num % div === 0 ? val : '');


const fizzbuzzthree = (num) => {

    let result = check(3, num, 'fizz');

    result += check(5, num, 'buzz');

    console.log(result);
}

fizzbuzzthree(3)
fizzbuzzthree(5)
fizzbuzzthree(15)
fizzbuzzthree(22)

