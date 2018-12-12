var model = {};

(function(exports){
  var notes = []

  function saveNotes(note) {
    notes.push(note)
    console.log(notes)
  }

  exports.saveNotes = saveNotes



})(model)
