



function greeting(callback, callback2){
    const hello  = 'hello '+callback() + callback2();
    console.log(hello)
}
function next(){
    return 'pawan'
}
function next2(){

    return 'nagar'
}


greeting(next, next2);

