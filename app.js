// only allowed to talk to controller

window.onload = function() {
  controller.homePage()
  eventsHome()
  function eventsHome() {
    document.getElementById("submit").addEventListener("click", function() {
      controller.addNote(document.getElementById("note").value)
    })

    document.getElementById("home").addEventListener("click", function() {
      controller.homePage()
      controller.addNotes()
      eventsHome()
    })

    document.getElementById("listNotes").addEventListener("click", function() {
      controller.listNotes()
      eventsNotes()
    })
  }

  function eventsNotes() {
    document.getElementById("home").addEventListener("click", function() {
      controller.homePage()
      controller.addNotes()
      eventsHome()
    })

    document.getElementById("listNotes").addEventListener("click", function() {
      controller.listNotes()
      eventsNotes()
    })
  }
}
