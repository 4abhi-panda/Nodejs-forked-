// const fs = require('fs');
// const path = require('path'); // Require the 'path' module
// const fsExtra = require('fs-extra');
// try{
//sync type ie first sync work then other
// const readFile = fs.readFileSync('../rename.txt','utf-8');
// console.log(readFile);
// console.log("Print this after read File");

//Async type
// const aSync = fs.readFile("../rename.txt","utf-8",(err, data) => {
//     let x = 10;
//     // while (x <= 20) {
//     //     console.log("X is", x++);
//     // }
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
//     console.log("Async this");
// });

//     const folderPath = 'chl'
//     const filePath = 'bio.txt'
//     const fileContent = 'This is the content of the file.\nHello, World!'
//     //create folder
//     try{
//         fs.mkdirSync(folderPath);
//         console.log(`${folderPath} folder is created successfully!`);
//             // create file in folder
//             fs.writeFile(`${folderPath}/${filePath}`, fileContent, 'utf-8', (err) => {
//                 if(!err){
//                     console.log(`${filePath} file created successfully!`);
//                     //appendFile content in file
//                     const appendFileContent = "\nThis is new File content which only for append some text."
//                     fs.appendFile(`${folderPath}/${filePath}`, appendFileContent, 'utf-8', (appendErr) => {
//                         if(appendErr){
//                             console.log(`We get some error while appending data or content: ${appendErr}`);
//                         }else{
//                             console.log(`Successfully append the data or content in file`);
//                             // Read the contents of the folder
//                             const files = fs.readdirSync(folderPath);
//                             files.forEach((file) => {
//                                 const filePaths = path.join(folderPath, file);
//                                 fs.unlinkSync(filePaths);
//                                 console.log(`file: ${filePaths}`);
//                             });
//                             // removeSync is remove empty folder
//                             try {
//                                 fsExtra.removeSync(folderPath);
//                                 console.log(`Folder "${folderPath}" and its contents have been deleted.`);
//                             } catch (error) {
//                                 console.error('Error deleting folder:', error);
//                             }
//                         }
//                     });
//                 }
//             });
//     } catch(error) {
//         console.log(error);
//     }

// } catch (error) {
//     console.log(error);
// }
