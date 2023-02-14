window.onload = function() {init()};
document.getElementById("navbar").onclick = function() {updateCheckbox()};

function init() {
  sort();
  updateCheckbox();
}

function updateCheckbox() {
  checkboxSort();
  checkPS1();
  checkPS2();
  checkPS3();
  checkPS4();
  checkPS5();
  checkPSV();
}

// sorts the games by alphabetical order by the text in the <p> that is hidden
function sort() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("games");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("div");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
// checks all playstation consoles if all playstation is checked
function checkboxSort() {
    allBRAND = document.getElementById('checkPS');
    consoles = document.querySelectorAll(".ps");
    if (allBRAND.checked == true) {
      consoles.forEach((element) => {
        element.checked = true;
      });
    }
    // uncheck allplaystation if any ps is unchecked --- but it's not working
    // if (consoles.some(element.checked === false)){
    //   allBRAND.checked = false;
    // }
}

// shows/hides games per console

function checkPS1() {
  gamesCheck = document.getElementById('checkPS1');
  games = document.querySelectorAll(".ps1");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}

function checkPS2() {
  gamesCheck = document.getElementById('checkPS2');
  games = document.querySelectorAll(".ps2");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}

function checkPS3() {
  gamesCheck = document.getElementById('checkPS3');
  games = document.querySelectorAll(".ps3");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}

function checkPS4() {
  gamesCheck = document.getElementById('checkPS4');
  games = document.querySelectorAll(".ps4");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}

function checkPS5() {
  gamesCheck = document.getElementById('checkPS5');
  games = document.querySelectorAll(".ps5");
  console.log("ps5?");
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}

function checkPSV() {
  gamesCheck = document.getElementById('checkPSV');
  games = document.querySelectorAll(".psv");
  
  if (gamesCheck.checked == false) {
    games.forEach((element) => {
      element.classList.add("hidegame");
    });
  } else {
    games.forEach((element) => {
      element.classList.remove("hidegame");
    });
  }
}