function numberOfGames() {
    var numberofgames = document.querySelectorAll('.showgame').length;
    var numberindicator = document.getElementById('numberItems');
    
    numberindicator.innerHTML = numberofgames + " Games";
}