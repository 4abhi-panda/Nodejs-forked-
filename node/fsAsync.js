const fs = require('fs');

// folder created by Async type i.e. using callback function
// fs.mkdir('fsAsync',(err) => { console.log("Created"); });

// created file name in folder by Async
// fs.writeFile("fsAsync/fsAsync.txt",'This is i learn from fs tutorial of Nodejs.\nPlease Save this for future reading.!', (err) => {
//     if(err){
//         console.log("catch a some error: ", err);
//     }else{
//         console.log("File created in Folder as File name fsAsync.txt");
//     }
// });


// append some text or content in file by fs.appendFile with using Async
// fs.appendFile('fsAsync/fsAsync.txt',"\nIf you read this so tell me 'Can we change the future?'", (err) => {
//     if(!err){
//         console.log("Future message delivered.");
//     }
// });

//
fs.readFile("fsAsync/fsAsync.txt", "utf8", (err, data) => {
    if (!err) {
        console.log('File content:');
        console.log(data);
    } else {
        console.error('Error reading the file:', err);
    }
});