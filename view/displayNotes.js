var displayNotes = {};

(function(exports) {

  function displayNote(note){
    document.getElementById("notes").innerHTML = '<p>'
    for (index = 0; index < note.length; ++index) {
      short = shortNote(note[index])
      document.getElementById("notes").innerHTML += index + 1 + " <a href=#" + index + " id='shortnote'>" + short + "</a>" + "<p>"
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
