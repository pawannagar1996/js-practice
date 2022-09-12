







function oddevn (num){

    if ( num <= 0){console.log('this is value less than one')}
    else if (num % 2 == 0){ console.log('odd')}
    else {console.log('even')}
}


oddevn (1)
oddevn (4)
oddevn (5)
oddevn (0)



console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

function odddevntwo (num){

    let result = num < 1 ? 'this value not recuired' : '' ;
   

     result += num % 2 == 0 ? 'odd' : '' ;

    result += num % 2 != 0 ? 'even' : '' ;

   

    console.log(result)

}


odddevntwo(2)
odddevntwo(4)
odddevntwo(5)
odddevntwo(0)