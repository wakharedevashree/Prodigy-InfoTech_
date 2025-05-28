
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tab of tablinks) {
        tab.classList.remove("active-link");
    }
    for (let tabcont of tabcontents) {
        tabcont.classList.remove("active-tab");
    }
   document.getElementById(tabname).classList.add("active-tab");
   event.currentTarget.classList.add("active-link");
}

