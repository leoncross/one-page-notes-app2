var controller = {};

(function(exports) {

  function addNote(note) {
    view.insertNote(note) // on view page
    model.saveNotes(note)
  }
  exports.addNote = addNote

}) (controller)
