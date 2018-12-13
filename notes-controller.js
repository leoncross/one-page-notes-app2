// can communicate with anything(but only main page for view)

var controller = {};

(function(exports) {

  function homePage() {
    view.homePage()
  }

  function addNote(note) {
    model.saveNotes(note)
    view.displayNote(model.recallNotes())
  }

  function addNotes() {
    view.displayNote(model.recallNotes())
  }

  function listNotes() {
    view.removeHtml()
    view.navigationBar()

    view.listNotes(model.recallNotes())
  }

  exports.listNotes = listNotes
  exports.homePage = homePage
  exports.addNote = addNote
  exports.addNotes = addNotes

}) (controller)
