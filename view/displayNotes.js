var displayNotes = {};

(function(exports) {

  function displayNote(note){
    document.getElementById("notes").innerHTML = '<p>'
    for (index = 0; index < note.length; ++index) {
      document.getElementById("notes").innerHTML += '<p>' + note[index] + '</p>'
    }
  }

  exports.displayNote = displayNote

}) (displayNotes)
