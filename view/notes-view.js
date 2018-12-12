var view = {};

(function(exports) {

  function display(){
    document.getElementById("htmlBody").innerHTML =
    '<h1>Notes</h1>' +
    '<textarea id="note" name="note" rows="4" cols="50"></textarea>'+ '<br>' +
    '<input id="submit" type="submit" value="submit">' +
    '<p id="notes"></p>'
  }

  function insertNote(note){
    document.getElementById("notes").innerHTML += '<p>' + note + '</p>'
  }
    exports.display = display
    exports.insertNote = insertNote

}) (view)
