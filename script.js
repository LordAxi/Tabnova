let favicon1, favicon2, favicon3, favicon4, favicon5, favicon6, favicon7, favicon8, favicon9, favicon10;
let fullDomain1, fullDomain2, fullDomain3, fullDomain4, fullDomain5, fullDomain6, fullDomain7, fullDomain8, fullDomain9, fullDomain10;
let searchengine;
function domainfieldupdate(){

domainlink1 = document.getElementById("linkfield1").value;
fullDomain1 = `https://${domainlink1}`;
favicon1 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink1}`;

domainlink2 = document.getElementById("linkfield2").value;
fullDomain2 = `https://${domainlink2}`;
favicon2 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink2}`;

domainlink3 = document.getElementById("linkfield3").value;
fullDomain3 = `https://${domainlink3}`;
favicon3 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink3}`;

domainlink4 = document.getElementById("linkfield4").value;
fullDomain4 = `https://${domainlink4}`;
favicon4 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink4}`;

domainlink5 = document.getElementById("linkfield5").value;
fullDomain5 = `https://${domainlink5}`;
favicon5 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink5}`;

domainlink6 = document.getElementById("linkfield6").value;
fullDomain6 = `https://${domainlink6}`;
favicon6 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink6}`;

domainlink7 = document.getElementById("linkfield7").value;
fullDomain7 = `https://${domainlink7}`;
favicon7 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink7}`;

domainlink8 = document.getElementById("linkfield8").value;
fullDomain8 = `https://${domainlink8}`;
favicon8 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink8}`;

domainlink9 = document.getElementById("linkfield9").value;
fullDomain9 = `https://${domainlink9}`;
favicon9 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink9}`;

domainlink10 = document.getElementById("linkfield10").value;
fullDomain10 = `https://${domainlink10}`;
favicon10 = `https://www.google.com/s2/favicons?sz=64&domain=${domainlink10}`;

searchengine = document.getElementById("searchenginesel").value;
if (searchengine === "google") {
document.getElementById("searchengine").action = "https://www.google.com/search";
} else if (searchengine === "duckduckgo") {
document.getElementById("searchengine").action = "https://duckduckgo.com/";
}
bgimage = document.getElementById("background-image").value;
vidorimg = document.getElementById("vidorimg").value;
if ( vidorimg === "video") {
document.getElementById("body").insertAdjacentHTML('beforeend', `
<div style="position: absolute; z-index: -1; width: 100%; height: 100%; overflow: hidden; top: 0; left: 0;">
<video autoplay muted loop playsinline style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); min-width: 100%; min-height: 100%; object-fit: cover;">
  <source src="${bgimage}" type="video/mp4">
</video>
</div>
`);
} else if ( vidorimg === "image") {
document.getElementById("body").insertAdjacentHTML('beforeend', `
<div style="position: absolute; z-index: -1; width: 100%; height: 100%; overflow: hidden; top: 0; left: 0;">
<img style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); min-width: 100%; min-height: 100%; object-fit: cover;" src="${bgimage}">
</div>
`);
} 
else if ( vidorimg === "color") {
document.getElementById("body").insertAdjacentHTML('beforeend', `
<div style=" background-color: ${bgimage};position: absolute; z-index: -1; width: 100%; height: 100%; overflow: hidden; top: 0; left: 0;">

</div>
`);
} 

document.getElementById("welcome-phrase").innerHTML = document.getElementById("welcome-phrase-input").value
document.getElementById("welcome-phrase").style.color = document.getElementById("welcome-color").value 
document.getElementById("welcome-phrase").style.fontFamily = document.getElementById("welcome-font").value
document.getElementById("welcome-phrase").style.fontSize = document.getElementById("welcome-size").value

document.getElementById("mp3src").src = document.getElementById("mp3").value;
}

    addEventListener("DOMContentLoaded", () => {
    domainfieldupdate()
bildreload()
urlreload()
});
function bildreload(){
document.getElementById("favlinkicon1").src = favicon1;
document.getElementById("favlinkicon2").src = favicon2;
document.getElementById("favlinkicon3").src = favicon3;
document.getElementById("favlinkicon4").src = favicon4;
document.getElementById("favlinkicon5").src = favicon5;
document.getElementById("favlinkicon6").src = favicon6;
document.getElementById("favlinkicon7").src = favicon7;
document.getElementById("favlinkicon8").src = favicon8;
document.getElementById("favlinkicon9").src = favicon9;
document.getElementById("favlinkicon10").src = favicon10;
}
function urlreload(){
document.getElementById("favlink1").href = fullDomain1;
document.getElementById("favlink2").href = fullDomain2;
document.getElementById("favlink3").href = fullDomain3;
document.getElementById("favlink4").href = fullDomain4;
document.getElementById("favlink5").href = fullDomain5;
document.getElementById("favlink6").href = fullDomain6;
document.getElementById("favlink7").href = fullDomain7;
document.getElementById("favlink8").href = fullDomain8;
document.getElementById("favlink9").href = fullDomain9;
document.getElementById("favlink10").href = fullDomain10;
}
function reload(){
domainfieldupdate()
bildreload()
urlreload()
}

function clock(){
var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var today = new Date();
document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " +
today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var day = h<11 ? 'AM': 'PM';
h = h<10? '0'+h: h;
m = m<10? '0'+m: m;
s = s<10? '0'+s: s;
document.getElementById('hours').innerHTML = h;
document.getElementById('min').innerHTML = m;
document.getElementById('sec').innerHTML = s;
}var inter = setInterval(clock,400);

let todo = [];          // Texte der ToDos
let checkboxState = []; // Checkbox-Zustände
let todoid = -1;

function addtodo() {
let x = document.getElementById("todo").value.trim();
if (x === "") return;

todoid++;
todo[todoid] = x;
checkboxState[todoid] = false;

renderTodoList();
document.getElementById("todo").value = "";
}

function deletetodo(deleteid) {
todo[deleteid] = null;
checkboxState[deleteid] = null;
renderTodoList();
}

function deleteall() {
todo = [];
checkboxState = [];
todoid = -1;
renderTodoList();
}

function toggleCheckbox(id) {
checkboxState[id] = !checkboxState[id];
renderTodoList();
}

function renderTodoList() {
let listHTML = "";
for (let i = 0; i <= todoid; i++) {
    if (todo[i] !== null) {
        const checked = checkboxState[i] ? "checked" : "";
        const style = checkboxState[i] ? "text-decoration: line-through;" : "";
        listHTML += `
            <li id="todo_${i}">
                <input id="todo_cb_${i}" type="checkbox" ${checked} onclick="toggleCheckbox(${i})">
                <span style="${style}">${todo[i]}</span>
                <button onclick="deletetodo(${i})">delete</button>
            </li>`;
    }
}
document.getElementById("todoul").innerHTML = listHTML;
updateProgress();
}

function updateProgress() {
let total = checkboxState.filter(x => x !== null).length;
let done = checkboxState.filter(x => x === true).length;

let percentage = total === 0 ? 0 : Math.round((done / total) * 100);

document.getElementById("ppm").innerText = `${percentage}%`;
document.getElementById("progressbar").style.width = `${percentage}%`;
}
