const fs = require('fs')

const getNote = function() {

}

const addNote = function(title, body) {
    const notes = loadNotes()
    const dupNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (dupNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)

        console.log('New note added')
    } else {
        console.log("Note title taken")
    }

}

const removeNote = function(title) {
    const notes = loadNotes()
    const keepNotes = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > keepNotes.length) {
        console.log('Note removed')
        saveNotes(keepNotes)
    } else {
        console.log('No note found')
    }


}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes) {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJson)
}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote
}