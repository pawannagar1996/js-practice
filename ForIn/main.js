function entriesFn(abcd) {
  let colVal = []
 for (let keys in abcd){
     colVal.push(abcd[keys])
 }
return colVal
}

const colorEntries2 = entriesFn(colorMap);
console.log('values entries2', colorEntries2) 



 function entriesFn2(abcd) {
  let entries = []
 for (let keys in abcd){
     entries.push(keys)
     entries.push(abcd[keys])
 }
return entries
}

const colorEntries3 = entriesFn2(colorMap);
console.log('values entries2', colorEntries3) 