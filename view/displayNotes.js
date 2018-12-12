var displayNotes = {};

(function(exports) {

  function displayNote(note){
    for (index = 0; index < note().length; ++index) {
        console.log(note[index]);
    document.getElementById("notes").innerHTML += '<p>' + note()[index] + '</p>'
  }
}

  exports.displayNote = displayNote

}) (displayNotes)
