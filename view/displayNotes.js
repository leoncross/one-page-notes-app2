var displayNotes = {};

(function(exports) {

  function displayNote(note){    
    document.getElementById("notes").innerHTML += '<p>' + note + '</p>'
  }

  exports.displayNote = displayNote

}) (displayNotes)
