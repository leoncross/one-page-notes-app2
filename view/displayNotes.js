var displayNotes = {};

(function(exports) {

  function displayNote(note){
    document.getElementById("notes").innerHTML = '<p>'
    for (index = 0; index < note.length; ++index) {
      short = shortNote(note[index])
      document.getElementById("notes").innerHTML +=  " <a href=#" + index + " class='list-group-item list-group-item-action' style='width: 18rem'; id='shortnote'>" + short + "</a>" + "<p>"
    }
  }
  function shortNote(note) {
    return note.substring(0,20)
  }

  function singleNote(note) {
    document.getElementById("htmlBody").innerHTML = '<h1>' + note + "</h1>"
  }

  exports.singleNote = singleNote
  exports.displayNote = displayNote

}) (displayNotes)
