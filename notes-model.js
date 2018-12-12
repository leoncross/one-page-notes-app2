var model = {};

(function(exports){
  notes = []

  function saveNotes(note) {
    notes.push(note)
    return note
  }

  exports.saveNotes = saveNotes

})(model)
