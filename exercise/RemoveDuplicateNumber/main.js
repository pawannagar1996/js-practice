const input = [1, 5, 7, 5]

let index = 0
let removeDup = []

let len = input.length

while(index<len){
    let arryRep = input[index]
if(removeDup.indexOf(arryRep)==-1){
    removeDup.push(arryRep)
}

    index++
}

console.log(removeDup)