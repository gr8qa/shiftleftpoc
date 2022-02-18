import { NotesCollection } from '../src/notesCollection';
import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";

@suite
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class NotesCollectionTest {
    private collection: NotesCollection;

    before() {
        this.collection = new NotesCollection();
        this.collection.addNote('first note', 'this is a test');
        this.collection.addNote('second note', 'this is a second test');
    }

    @test
    testAddNote() {
        let title = 'third note';
        let notes = this.collection.addNote(title, 'this is third node');
        expect(notes.length).to.equal(3);

        let note = this.collection.findNote(title)
        expect(note).not.null;
    }

    /***********************************************************
        Comment out the following function for SonarQube demo
    ************************************************************/
    // @test
    // testAddDuplicateNote() {
    //     let notes = this.collection.addNote('first note', 'duplicate note');
    //     expect(notes.length).to.equal(2);
    // }
    //
    // @test
    // testRemoveNote() {
    //     let title = 'second note';
    //     this.collection.removeNote(title);
    //     expect(this.collection.findNote(title)).to.be.undefined;
    // }
}
