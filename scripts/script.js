/* ---- Variables ---- */

let codeBlock = document.getElementById("codeBlock");
let viewBtn = document.getElementsByClassName("view-btn");
let tabLinks = document.getElementsByClassName("tab-links");
let closeBtn = document.getElementById("close-btn");
let toggleCode = document.getElementById("toggleCode");
let copyBtn = document.querySelector(".copy-btn");

/* ------------------- */

for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", openCodeBlock);
}

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", openTab);
}

closeBtn.addEventListener("click", closeCodeBlock);

copyBtn.addEventListener("click", copyCodeBlock);

/* ---- functions ------- */

//  funtion to open the code container
let toggleContainer;
let toggleName;
function openCodeBlock(event) {
  toggleContainer = event.target.offsetParent;

  codeBlock.classList.add("open");
  toggleContainer.classList.add("show");
  toggleName = toggleContainer.getAttribute("data-toggle-name");
  showCode("html", toggleName);

  resetTab();
}

//  funtion to reset tabs
function resetTab() {
  previousTab = document.querySelector(".html-code");

  previousTab.classList.add("active");
  document.querySelector(".css-code").classList.remove("active");
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

  if (previousTab != currentTab) {
    currentTab.classList.add("active");
    previousTab.classList.remove("active");
    previousTab = currentTab;
  }

  let codeType = currentTab.getAttribute("data-code");
  showCode(codeType, toggleName);
}

// function to display code
function showCode(codeType, toggleName) {
  toggleCode.innerHTML = "";
  for (let i = 0; i < data[toggleName][codeType].length; i++) {
    let codeLine = document.createElement("pre");
    codeLine.innerHTML += data[toggleName][codeType][i];
    toggleCode.append(codeLine);
  }
}

// function to format code

function formatCode(codeContent) {
  let code = "";
  for (let i = 0; i < codeContent.length; i++) {
    if (
      codeContent[i] == ">" ||
      codeContent[i] == "{" ||
      codeContent[i] == "}" ||
      codeContent[i] == ";"
    ) {
      code = code + codeContent[i] + "\n";
    } else {
      code = code + codeContent[i];
    }
  }

  return code;
}

// function to copy code

const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(str);
  }

  return Promise.reject("The Clipboard API is not available.");
};

function copyCodeBlock() {
  let codeContent = toggleCode.textContent;

  codeContent = formatCode(codeContent);

  if (copyToClipboard(codeContent)) {
    alert("code copied successfully!");
  }
}
