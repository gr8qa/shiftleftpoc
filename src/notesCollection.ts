import * as fs from 'fs';
import { Note } from './Note';

export class NotesCollection {
    constructor(public notes: Note[] = []) {}

    addNote(title: string, body: string): Note[] {
        let note = this.findNote(title);

        if (note == undefined) {
            this.notes.push(new Note(title, body));
            console.log(`${title} added`);
        } else {
            console.log(`Note title ${title} already exists`);
        }

        return this.notes;
    }

    removeNote(title: string): void {
        this.notes = this.notes.filter(note => note.title !== title);
    }

    findNote(title: string): Note {
        return this.notes.find(note => note.title === title);
    }

    printAllNotes(): void {
        this.notes.forEach(note => console.log(note));
    }
}
