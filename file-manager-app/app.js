const path = require('path');
const fs = require('fs');
const isValid = require('./validations/validate.js');
const command = process.argv[2];
const fileName = process.argv[3];
const newFileName = process.argv[4];
// console.log(process.argv);
// console.log()
/*
🔥 Mini Project 1: File Manager CLI

Commands:

node app.js create test.txt
node app.js read test.txt
node app.js delete test.txt
node app.js rename old.txt new.txt

👉 This will make you strong fast.
*/
const result = isValid(command,fileName,newFileName);

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

else if(command == "read"){
    fs.readFile(filePath,{encoding:'utf-8'},(err,data) => {
        if(err){
            throw err;
        }
        console.log(data);
    })

}

else if (command  == "rename"){
    const newFilePath = path.join(__dirname , "files",newFileName);
    try{
        fs.renameSync(filePath, newFilePath);
        console.log("File Rename Successfully");
    }
    catch(err){
        console.log("Error renaming File:",err);
    }
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
