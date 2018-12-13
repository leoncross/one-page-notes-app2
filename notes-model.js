// handles data - saves, returns. Only handles; doesnt handle the look of each


var model = {};

(function(exports){
  var notes = []

  function saveNotes(note) {
    notes.push(note)
    return note
  }

  function recallNotes() {
    return notes
  }


  function findNote(index){
    return notes[index]
  }

  exports.findNote = findNote
  exports.saveNotes = saveNotes
  exports.recallNotes = recallNotes

})(model)
