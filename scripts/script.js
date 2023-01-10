/* ---- Variables ---- */

let codeBlock = document.getElementById("codeBlock");
let viewBtn = document.getElementsByClassName("view-btn");
let tabLinks = document.getElementsByClassName("tab-links");
let closeBtn = document.getElementById("close-btn");
/* ------------------- */

for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", openCodeBlock);
}

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", openTab);
}

closeBtn.addEventListener("click", closeCodeBlock);

//  functions

//  funtion to open the code container
let toggleContainer;
function openCodeBlock(event) {
  toggleContainer = event.target.offsetParent;

  codeBlock.classList.add("open");
  toggleContainer.classList.add("show");
}

//  funtion to close the code container
function closeCodeBlock(event) {
  codeBlock.classList.remove("open");
  toggleContainer.classList.remove("show");
}

// function to select tab
let previousTab = codeBlock.querySelector(".active");
let currentTab;

function openTab(event) {
  currentTab = event.target;
  currentTab.classList.add("active");
  previousTab.classList.remove("active");
  previousTab = currentTab;

  let codeType = currentTab.getAttribute("data-code");
  let toggleName = toggleContainer.getAttribute("data-toggle-name");
  console.log(codeType, toggleName);

  showCode(codeType, toggleName);
}

function showCode(codeType, toggleName) {
  console.log(data[toggleName][codeType]);
}
