// can only communicate with view pages
// can only handle the view (text/layout)

var view = {};

(function(exports) {


  function homePage(){
    navigation.navigationBar()
    addnotes.displayNoteInput()
  }

  function displayNoteInput(){
    addnotes.displayNoteInput()
  }

  function displayNote(note){
    displayNotes.displayNote(note)
  }

  function listNotes() {
    allNotes.listNotes()
  }

  exports.homePage = homePage
  exports.displayNote = displayNote
  exports.displayNoteInput = displayNoteInput
  exports.listNotes = listNotes


}) (view)
