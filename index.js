var settingmenu = document.querySelector(".drop-down")
var darkbtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingmenu.classList.toggle("drop-down-height");

}

darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-togg-on");
    document.body.classList.toggle("dark-mode");
}