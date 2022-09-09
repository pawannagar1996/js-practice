


let age = 9;


function insertAge(age) {
    if (age <= 10) { console.log("you are inter"); }
    else { console.log("only allowed less then 11",); }

};



insertAge(9);
insertAge(12);
insertAge(age);



console.log('=====================');

//IIFE (Immediately Invoked Function Expression)

(function (a, b) { console.log(a + b) })(5, 6);     //add

(function (a, b) { console.log(a - b) })(25, 6);     //minus

(function (a, b) { console.log(a / b) })(25, 6);     //Division

(function (a, b) { console.log(a % b) })(50, 25);     //remainder




console.log('====================================================');

let multy = function (a, b) {
    let result = a + b;
    return result;
    let result1 = a - b;
    return result1;
    let result2 = a / b;
    return result2;
    let result3 = a % b;
    return result3;
    let result4 = a ** b;
    return result4;
}

result = multy(2, 5);
let result1 = multy(2, 5);
result2 = multy(2, 5);
result3 = multy(2, 5);
result4 = multy(2, 5);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);



console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');





let add = function (a, b) {
    let result = a + b;
    return result;
}

result = add(5, 2);
console.log(result)



let minus = function (a, b) {

    let result1 = a - b;
    return result1;

}
result1 = minus(2, 5);
console.log(result1);





let Division = function (a, b) {

    let result2 = a / b;
    return result2;

}

result2 = Division(2, 5);
console.log(result2);





let remainder = function (a, b) {

    let result3 = a % b;
    return result3;

}
result3 = remainder(2, 5);
console.log(result3);



let Power = function (a, b) {

    let result4 = a ** b;
    return result4;
}
result4 = Power(2, 5);
console.log(result4);







console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');


Power = function (a, b) {

    return a ** b;

}

console.log(Power(2, 5));





console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');


// jo 3 s divied ho uska naam pepsi
// jo 5 s divied ho uska naam coke
// jo dono s ho uska naam pepsicoke

// or bache hue 'kabade main ja'




function value1(value) {
    if (value % 5 == 0 && value % 3 == 0) { console.log("pepsicoke"); }

    else if (value % 3 == 0) { console.log("pepsi"); }

    else if (value % 5 == 0) { console.log("coke"); }


    else { console.log("kabade main ja",); }

};



value1(6);