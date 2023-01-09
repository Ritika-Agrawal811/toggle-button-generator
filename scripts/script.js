let codeBlock = document.getElementById("codeBlock");

let viewBtn = document.getElementsByClassName("view-btn");

function openCodeBlock(event) {
  codeBlock.classList.add("open");
  console.log(event);

  let toggleContainer = event.target.offsetParent;

  toggleContainer.classList.add("show");
}

for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", openCodeBlock);
}
