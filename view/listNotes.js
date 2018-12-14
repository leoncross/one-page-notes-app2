var allNotes = {};

(function(exports) {

  function listNotes(note){
    document.getElementById("htmlBody").innerHTML = "<h1> List of Notes: </h1>" + '<p id="notes"></p>'
    for (index = 0; index < note.length; ++index) {
      document.getElementById("notes").innerHTML += "<br>" + '<p class="list-group-item" style="width: 70rem">' + note[index] + '</p>'
    }
  }

  exports.listNotes = listNotes

}) (allNotes)
