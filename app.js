
window.onload = function() {
  view.homePage()
  events()

  function events() {
    document.getElementById("submit").addEventListener("click", function() {
      controller.addNote(document.getElementById("note").value)
    })

    document.getElementById("home").addEventListener("click", function() {
      view.homePage()
      events()
    })

    document.getElementById("listNotes").addEventListener("click", function() {
      view.listNotes()
    })
  }

}
