var navigation = {};

(function(exports) {

  function navigationBar(){
    document.getElementById("navigation").innerHTML =
    '<br>' +
    '<input id="home" class="btn-group btn-group-lg" role="group" type="submit" aria-label="Home" value="Home">' +
    '<input id="listNotes" class="btn-group btn-group-lg" role="group" type="submit" value="List of Notes">'
  }
  exports.navigationBar = navigationBar

}) (navigation)
