window.onload = function () { init() };
document.getElementById('navbar').onclick = function () { updateCheckbox() };

function init() {
  sort();
  updateCheckbox();
}

function updateCheckbox() {
  checkboxSort();
}

// box to add games??

let modalBtns = [...document.querySelectorAll('.button')];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = 'block';
  };
});
let closeBtns = [...document.querySelectorAll('.close')];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest('.modal');
    modal.style.display = 'none';
  };
});
window.onclick = function (event) {
  if (event.target.className === 'modal') {
    event.target.style.display = 'none';
  }
};

function addGame(){
  var dataconsole;
  var datagamename;
  var dataimage;
  var dataconsolefamily;
  var datapegi;

  const para = document.createElement('div');
  para.innerHTML = "<div class='game " + dataconsole + "'>" + dataconsole + " " + datagamename + "<img class='game-image' src = '" + dataimage + "' alt = '" + dataconsole + " " + datagamename + "' ><span class='gameinfo " + dataconsolefamily + "'><p class='info-console'>" + dataconsole + "</p><p class='info-name'>" + datagamename + "</p><p class='info-is-borrowed'>Availability</p><p class='info-pegi info-" + datapegi + "'></p></span></div >";
  document.getElementById('games').appendChild(para);
}


// sorts the games by alphabetical order by the text at the start of the div
function sort() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById('games');
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName('div');
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

// function checkboxSort() {
//   allBRAND = document.getElementById('checkPS');
//   consoles = document.querySelectorAll('.ps');
//   if (allBRAND.checked == true) {
//     consoles.forEach((element) => {
//       element.checked = true;
//     });
//   }
  // uncheck allplaystation if any ps is unchecked --- but it's not working
  // if (consoles.some(element.checked === false)){
  //   allBRAND.checked = false;
  // }
//}
