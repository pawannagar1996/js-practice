const input = ['A', 'b', 'C', 'D', 'E', 'f', 'g']

let letters = []
let index =  0

let len = input.length

while(index<len){
let words=input[index]
    if(index%2==0){

        letters+=words.toUpperCase();
    }else{
        letters+=words.toLowerCase();
    }


    index++
}

console.log(letters)