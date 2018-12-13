// only allowed to talk to controller

window.onload = function() {
  controller.homePage()
  eventsHome()

  function eventsHome(){
    submit()
    home()
    listNotes()
  }

  function eventsList(){
    home()
    listNotes()
  }

  function submit(){
    document.getElementById("submit").addEventListener("click", function() {
      controller.addNote(document.getElementById("note").value)
      eventsHome()
    })
  }
  function home(){
    document.getElementById("home").addEventListener("click", function() {
      controller.homePage()
      controller.addNotes()
      eventsHome()
    })
  }
  function listNotes(){
    document.getElementById("listNotes").addEventListener("click", function() {
      controller.listNotes()
      eventsList()
    })
  }
}
