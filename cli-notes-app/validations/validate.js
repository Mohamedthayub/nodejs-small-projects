const fs = require('fs');
const path = require('path');
function validateNotes(note,command){
    let  check = true;
    let errorMessage = "";
    const validCommands = ["add","list","delete"];
    if(!command){
        errorMessage = "you must enter the command";
        check = false;
    }
    // if(!note || )
    if(command == "list" &&  !note){
        errorMessage = "";
        check = true;
    }

    if(!note){
        errorMessage = "you must enter the note";
        check = false;  
    }

    if(!validCommands.includes(command)){
        errorMessage = "Invalid command";
        check = false;
    }
    
    const newPath = path.join(__dirname,"..",'notes.json');
    const notes  = fs.readFileSync(newPath,'utf-8');
    
    if(notes.includes(note)){
        errorMessage = "This note Already exist";
        check = false;
    }
    return {check,errorMessage};
}

module.exports = validateNotes;