// only allowed to talk to controller

window.onload = function() {
  controller.homePage()
  events()
  function events() {
    document.getElementById("submit").addEventListener("click", function() {
      controller.addNote(document.getElementById("note").value)
    })

    document.getElementById("home").addEventListener("click", function() {
      controller.homePage()
      controller.addNotes()
      events()
    })

    document.getElementById("listNotes").addEventListener("click", function() {
      view.listNotes()
    })
  }
}
