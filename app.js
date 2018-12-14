// only allowed to talk to controller

window.onload = function() {
  controller.homePage()
  history.replaceState(null, null, ' ');

events()
  function events() {
    document.getElementById("home").addEventListener("click", function() {
      controller.homePage()
      controller.addNotes()
      events()
      hashChange()
    })

    document.getElementById("listNotes").addEventListener("click", function() {
      controller.listNotes()
      events()
    })

    var element = document.getElementById("submit")
    if (element) {
      element.addEventListener("click", function() {
      controller.addNote(document.getElementById("note").value)
      hashChange()
      })
    }
  }

  function hashChange(){
    window.addEventListener("hashchange", function() {
      location = window.location
      controller.hashTracker(location)
      events()
    })
  };
}
