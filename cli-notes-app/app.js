const fs =  require('fs');
const path = require('path');

const filePath = path.join(__dirname,'notes.json');

const command = process.argv[2]
const value = process.argv[3]

const readNotes = () => {
    try{
        const data  = fs.readFileSync(filePath,'utf-8');
        return JSON.parse(data);
    }
    catch(err){
        return [];
    }
}

const saveNotes  = (notes) => {
    fs.writeFileSync(filePath,JSON.stringify(notes));
}

if(command == "add"){
    const notes = readNotes();
    notes.push(value);
    saveNotes(notes);
    console.log("Note Added ...");
}
else if (command == "list"){
    const notes = readNotes();
    if(notes.length == 0){
        console.log("no notes found ...");
    }
    else{
        console.log("Your Notes");
        console.log("-----------")
        notes.forEach((note,index) => {
            console.log(`${index + 1} . ${note}`);
        })
    }
}

else if (command === "delete"){
    const notes = readNotes();
    const newNotes   = notes.filter((note) => note !== value);
    saveNotes(newNotes);
    console.log("Your Note deleted");
}

else{
    console.log("Invalid command");
}