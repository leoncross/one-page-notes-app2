var displayNotes = {};

(function(exports) {

  function displayNote(note){
    document.getElementById("notes").innerHTML = '<p>'
    for (index = 0; index < note.length; ++index) {
      short = shortNote(note[index])
      document.getElementById("notes").innerHTML += '<p>' + short + '</p>'
    }
  }

  function shortNote(note) {
    return note.substring(0,20)
  }

  exports.displayNote = displayNote

}) (displayNotes)
