let started = false
let setupmethod = "";

function start(){
    started = true
    document.getElementById("body").innerHTML = '<div class="wrapper"><div class="content"><h1 class="introductionh1">Welcome to Tabnova</h1><p class="introduction">A better NewTab Experience.<br>Welcome you will now be able to setup Tabnova. Have Fun.</p><div class="selectsetup"><div class="standart setupoption" id="standard"><mark class="title">standart setup</mark><br>standart settings</br></div><div class="custom setupoption" id="custom"><mark class="title">custom setup</mark><br>basic individual configuration</br></div><div class="intense setupoption" id="intense"><mark class="title">intense setup</mark><br>configure everything</br></div></div></div></div>';
}

document.getElementByID("standard").onclick = function() {
    setupmethod = "standard";
    console.log("setupmethod:", setupmethod);
};

document.getElementByID("custom").onclick = function() {
    setupmethod = "custom";
    console.log("setupmethod:", setupmethod);
};

document.getElementById("intense").onclick = function() {
    setupmethod = "intense";
    console.log("setupmethod:", setupmethod);
};
document.getElementById