const path = require('path');
const fs = require('fs');
const isValid = require('./validations/validate.js');
const command = process.argv[2];
const fileName = process.argv[3];
/*
🔥 Mini Project 1: File Manager CLI

Commands:

node app.js create test.txt
node app.js read test.txt
node app.js delete test.txt
node app.js rename old.txt new.txt

👉 This will make you strong fast.
*/

const result = isValid(command,fileName)

if(result !== ""){
    console.log(result);
    process.exit();
}
const filePath = path.join(__dirname,"files",fileName);


if(command == "create"){
    fs.writeFile(filePath,"this is the first Text content",(err) => {
        if(err){
            throw err;
        }
    });
}

else if(command == "delete"){
    try{
        fs.unlinkSync(filePath)
        console.log("File deleted Successfully")
    }  
    catch(err){
        console.log("Error deletin File",err.message);
    }
} 
