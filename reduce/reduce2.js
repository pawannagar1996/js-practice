const drive = [
    { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
    { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
    { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
    { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
    { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
  ]
  
  Array.prototype.myReduce = function(callbackFn, initial) {
    let result = initial;
    const len = this.length;
    for (let index = 0; index < len; index++) {
      const current = this[index];
      result = callbackFn(result, current)
    }
    return result;
  }
  
//  function myFunc(obj, prop) {

//   return obj.reduce(function (acc, item) {

//     let key = item[prop]

//     if (!acc[key]) {

//       acc[key] = []

//     }

//     acc[key].push(item)

//     return acc

//   }, {})

// }

// let groupedStudent = myFunc(drive, 'type')

// console.log(groupedStudent)

const totalFile = drive.reduce((pre , cur) => {
  
  if(cur.type === 'file') {
    pre.file.push(cur)
  }else{
    pre.directory.push(cur)
  }
  return pre
} , { file: [], directory:[]})

console.log(totalFile)  


const totalFile2 = drive.myReduce((pre , cur) => {
  
  if(cur.type === 'file') {
    pre.NewFile.push(cur)
  }else{
    pre.NewDirectory.push(cur)
  }
  return pre
} , { NewFile: [], NewDirectory:[]})

console.log(totalFile2)  


const array =[
  {}
]