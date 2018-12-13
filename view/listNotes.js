var allNotes = {};

(function(exports) {

  function listNotes(note){
    document.getElementById("htmlBody").innerHTML = '<p id="notes"></p>'
    for (index = 0; index < note.length; ++index) {
      document.getElementById("notes").innerHTML += '<p>' + note[index] + '</p>'
    }
  }

  exports.listNotes = listNotes

}) (allNotes)
