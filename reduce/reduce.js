const drive = [
    { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
    { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
    { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
    { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
    { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
  ]
  
  
  
  const totalFile = drive.reduce((pre , cur) => {
  
      if(cur.type === 'file') {
        pre.file += 1 
      }else{
         pre.directory += 1 
      }
      return pre
  } , { file: 0, directory: 0})
  
  console.log(totalFile)  