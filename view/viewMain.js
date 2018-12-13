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

  function listNotes(notes) {
    allNotes.listNotes(notes)
  }

  function removeHtml() {
    remove.removeHtml()
  }

  function navigationBar (){
    navigation.navigationBar()
  }

  function displaySingleNote(note){
    displayNotes.singleNote(foundNote)
  }

  exports.displaySingleNote = displaySingleNote
  exports.navigationBar = navigationBar
  exports.removeHtml = removeHtml
  exports.homePage = homePage
  exports.displayNote = displayNote
  exports.displayNoteInput = displayNoteInput
  exports.listNotes = listNotes


}) (view)
