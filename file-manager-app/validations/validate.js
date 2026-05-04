// const fs = require('fs');
const path = require('path');
function validateInput(command,file,newFile){
    const validCommands = ["create","read","delete","rename"];
    if(!command){
        return "you must enter the command";
    }
    if(!validCommands.includes(command)){
        return "invalid command";
    }

    if(!file){
        return "you must enter the fileName";
    }

    if(command == "create" && !path.extname(file)){
        return "you must enter the file extension";
    }

    if(command  == "rename" && !newFile){
        return "you must provide new file name for  rename";
    }

    return "";
}
module.exports = validateInput;