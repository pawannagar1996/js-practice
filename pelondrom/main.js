let palendrom = 'noon'


let index = 0;
let len = palendrom.lenght
let store = palendrom.split('')
console.log(store);
let store2 = store.reverse()
console.log(store2);
let store3 = store.join('')
console.log(store3)


    
    if(palendrom == store3){ 
        console.log('its palendrom')
    }
    else{
        console.log('its not a palendrom')
    }
    
    
// 2 tarika

let str = 'rara'
len = str.length
console.log(len)
index = 0;
    if( index < len /2){
        // console.log(str[index])
        // console.log(str[len -1 - index])
        if(str[index] == str[len -1 - index]){
            console.log('its a palndrom')
        }
        else{
            console.log('its not a palndrom')
        }
    }











