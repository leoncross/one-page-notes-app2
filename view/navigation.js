var navigation = {};

(function(exports) {

  function navigationBar(){
    document.getElementById("navigation").innerHTML =
    '<input id="home" type="submit" value="Home">' +
    '<input id="listNotes" type="submit" value="List of Notes">'
  }
  exports.navigationBar = navigationBar

}) (navigation)
