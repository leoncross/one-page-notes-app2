var controller = {};

(function(exports) {

  function addNote(note) {
    view.displayNote(note)
    model.saveNotes(note)
  }
  exports.addNote = addNote

}) (controller)
