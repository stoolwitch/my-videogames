var isfilterbaractive = false;
var isgenderactive = false;
var isconsoleactive = false;
var iscategoryactive = false;

function toggleFilterBar() {
    var filterbar = document.getElementById("filters");
    var togglebutton = document.getElementById("filterMenu");
    var gamessection = document.getElementById("games");
    
    if (isfilterbaractive == false){
        isfilterbaractive = true;
        filterbar.style.display = "block";
        togglebutton.className = "filterMenuActive";
        gamessection.style.gridColumnEnd = "2";
    } else {
        isfilterbaractive = false;
        filterbar.style.display = "none";
        togglebutton.classList.remove("filterMenuActive");
        gamessection.style.gridColumnEnd = "3";
    }
}

function expandCategory(event) {
    var thiscategory = event.target;
    var whichcategory = thiscategory.firstChild.innerHTML;
    var filterlist = document.getElementById(whichcategory);
    if (this.iscategoryactive == false){
        thiscategory.innerHTML = "<p>"+ whichcategory +"</p> <img src='media/svg/icons/expand_less.svg' alt=''>";
        filterlist.style.display = "block";
        this.iscategoryactive = true;
    } else {
        thiscategory.innerHTML = "<p>"+ whichcategory +"</p> <img src='media/svg/icons/expand_more.svg' alt=''>";
        filterlist.style.display = "none";
        this.iscategoryactive = false;
    }
    
}