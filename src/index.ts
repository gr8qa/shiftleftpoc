import { NotesCollection } from "./notesCollection";
import { Note } from "./Note";

let collection = new NotesCollection();
collection.addNote("first note", "this is a test");
collection.addNote("second note", "this is a test");
collection.printAllNotes();

let note = collection.findNote('third');
if (note !== undefined) {
    console.log(note.title);
} else {
    console.log("could not find the note");
}

collection.removeNote('first note');
collection.printAllNotes();

// note = new Note("second note", "this is second test");
// addNote(note);
