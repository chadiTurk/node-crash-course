const fs = require('fs');

// read files
// fs.readFile('./docs/blog.txt',(err,data) =>{
//   if(err){
//     console.log(err);
//   }

//   console.log(data.toString());
// });

// console.log('last line');

//write files
// fs.writeFile('./docs/blog.txt','hello,world', () =>{
//   console.log("done");
// });
//directories

// if(!fs.existsSync('./assets')){
//   fs.mkdir('./assets', (err)=>{
//     if(err){
//       console.log(err);
//     }
  
//     console.log("Folder created");
//   });
// }else{
//   fs.rmdir('./assets',(err) =>{
//     if(err)
//       console.log(err);
    
//     console.log("Folder deleated");
//   });
// }




//delete files

if(fs.existsSync('./docs/deleteme.txt')){

  fs.unlink('./docs/deleteme.txt',(err) =>{
    if(err)
      console.log(err);
    else
      console.log("File deleted");
  });

}