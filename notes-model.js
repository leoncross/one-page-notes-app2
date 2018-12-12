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

  exports.saveNotes = saveNotes
  exports.recallNotes = recallNotes

})(model)
