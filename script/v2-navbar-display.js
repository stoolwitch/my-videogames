var isfilterbaractive = false;
var isgenderactive = false;
var isconsoleactive = false;

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
    var whichcategory = thiscategory.name;
    console.log(whichcategory);
    var filterlist = document.getElementById(whichcategory);
    if (!thiscategory.classList.contains('categoriesactive')){
        thiscategory.innerHTML = "<span>"+ whichcategory +"</span><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 14.2' style='enable-background:new 0 0 24 14.2;' xml:space='preserve'><path d='M2.2,14.2L0,12L12,0l12,11.9l-2.1,2.2L12,4.2L2.2,14.2z'/></svg>";
        filterlist.style.display = "block";
        thiscategory.classList.add('categoriesactive');
    } else {
        thiscategory.innerHTML = "<span>"+ whichcategory + "</span><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 14.2' style='enable-background:new 0 0 24 14.2;' xml:space='preserve'><path d='M12,14.2L0,2.2L2.2,0L12,9.9l9.8-9.9L24,2.2L12,14.2z'/></svg>";
        filterlist.style.display = "none";
        thiscategory.classList.remove('categoriesactive');
    }
}