const fs = require('fs');
const path = require('path');
function validateNotes(note,command){
    let  check = true;
    let errorMessage = "";
    const validCommands = ["add","list","delete"];

    if(!command){
        return {check: false,errorMessage: "you must  enter the command"};
    }

    if((command == "add" || command == "delete" ) && !note){
        return {check:false,errorMessage:"you must enter your note"};    
    }

    if(!validCommands.includes(command)){
        return {check:false , errorMessage:"Invalid command"};
    }
    
    const newPath = path.join(__dirname,"..",'notes.json');
    let notes  = [];
    try{
        const data = fs.readFileSync(newPath,'utf-8');
        notes = JSON.parse(data);
    }
    catch(err){
        notes = [];
    }
    
    if(command == "delete" && !notes.includes(note)){
        return {check:false,errorMessage:"This note does not exist for delete"}
    }

    if(command === "add" && notes.includes(note)){
        return {check:false,errorMessage:"This note already exists"};
    }
    

    return {check:true,errorMessage:""};
}

module.exports = validateNotes;