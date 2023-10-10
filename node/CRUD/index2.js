try {
  const fs = require('fs');
  const vm = require('vm');
  const path = require('path'); // Require the 'path' module

  // Read the contents of the file
  //const readFs = fs.readFileSync('CRUD/first.js', 'utf8');

  // Create a new context for the script
  //const context = { console }; // You can include additional objects or variables here

  // Run the script in the new context
//   vm.createContext(context);
//   vm.runInContext(readFs, context);

  // Now you can access variables or functions defined in 'first.js' from the 'context' object
  // For example, if 'first.js' defines a function called 'myFunction', you can call it like this:
  // context.myFunction();

  // fs.appendFile('CRUD/first.js',"\nconsole.log('Hello This is new content')", function(err, data){
  //   if(err) throw err;
  //   console.log("Saved!",data);
  // });
//removeSync is remove empty folder 
// fs.removeSync('CRUD');

// start: whole folder delete with internal files also
// const folderPath = 'CRUD'; // Specify the path to the folder
// try {
//   // Read the contents of the folder
//   const files = fs.readdirSync(folderPath);

//   // Iterate through the files and remove them
//   files.forEach((file) => {
//     const filePath = path.join(folderPath, file);
//     fs.unlinkSync(filePath);
//     console.log(`Deleted file: ${filePath}`);
//   });
  //removeSync is remove empty folder 
// fs.removeSync(folderPath);
//   console.log('All files in the "CRUD" folder have been deleted.');
// } catch (error) {
//   console.error('Error deleting files:', error);
// }
//end  this operation

//start: make folder
// const folderPath = "new"
// try{
//   fs.mkdirSync(folderPath);
//   console.log(`${folderPath} folder created successfully!`);
// } catch(error){
//   console.error('Error Creating folder:', error);
// }
//end:




} catch (error) {
  console.error('Error executing the script:', error);
}
