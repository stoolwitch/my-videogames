function filterCondtn1(event) {
  var element = event.target;
  var condt1 = document.getElementsByClassName("categoriesConsole");
  for (var i = 0; i < condt1.length; i++) {
    if (condt1[i].innerHTML.toLowerCase() == element.value.toLowerCase()) {
      if (element.checked == true) {
        condt1[i].parentElement.classList.add("showgame");
      } else {
        condt1[i].parentElement.classList.remove("showgame");
      }
    }
  }
  numberOfGames();
}