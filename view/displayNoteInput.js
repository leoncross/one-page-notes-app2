var addnotes = {};

(function(exports) {

  function displayNoteInput(){
    document.getElementById("htmlBody").innerHTML =
    '<h1>My Notes</h1>' +
    '<textarea id="note" name="note" rows="4" cols="50"></textarea>'+ '<br>' +
    '<input id="submit" type="submit" value="submit">' +
    '<p id="notes"></p>'
  }
    exports.displayNoteInput = displayNoteInput

}) (addnotes)
