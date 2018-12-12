
window.onload = function() {

  view.display()

  document.getElementById("submit").addEventListener("click", function() {
    controller.addNote(document.getElementById("note").value)
  })

}
