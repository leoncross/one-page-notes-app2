

var remove = {};

(function(exports) {

  function removeHtml(){
    document.getElementById("htmlBody").innerHTML = '<p>'
    document.getElementById("navigation").innerHTML = '<p>'

  }


  exports.removeHtml = removeHtml

}) (remove)
