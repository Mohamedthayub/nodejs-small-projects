const fs = require('fs');
const path = require('path');
function validateFile(command,file,newFile){
    const validCommands = ["create","read","delete","rename"];
    if(!command){
        return "you must enter the command";
    }

    if(fs.existsSync(file)){
        return "This File Already exist";  
    }

    if(!validCommands.includes(command)){
        return "invalid command";
    }
    
    if(!file){
        return "you must enter the fileName";
    }
    
    const fullPath = path.join(__dirname, "..","files",file);
    
    if(command === "create" &&  fs.existsSync(fullPath)){
        return "This File already exists";
    }

    if((command === "read" || command === "delete" || command === "rename") && !fs.existsSync(fullPath)){
        return "This File does not exist in this name "
    }

    if(command == "create" && !path.extname(file)){
        return "you must enter the file extension";
    }

    if(command  == "rename" && !newFile){
        return "you must provide new file name for  rename";
    }

    return "";
}
module.exports = validateFile;