var controller = {};

(function(exports) {

  function addNote(note) {
    model.saveNotes(note)
    view.displayNote(model.recallNotes)
  }

  function addNotes() {
    view.displayNote(model.recallNotes)
  }

  exports.addNote = addNote
  exports.addNotes = addNotes

}) (controller)
