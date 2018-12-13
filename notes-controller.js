// can communicate with anything(but only main page for view)

var controller = {};

(function(exports) {

  function homePage() {
    view.homePage()
  }

  function addNote(note) {
    model.saveNotes(note)
    view.displayNote(model.recallNotes)
  }

  function addNotes() {
    view.displayNote(model.recallNotes)
  }

  function listNotes() {

  }

  exports.listNotes = listNotes
  exports.homePage = homePage
  exports.addNote = addNote
  exports.addNotes = addNotes

}) (controller)
