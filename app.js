let increment_btn = document.getElementById("counter-num");
let pre_save = document.getElementById("saved")

let increase = 0;
function  myIncrement() {
  increase += 1;
  increment_btn.textContent = increase
}

function mySaved() {
  let entriesStr = increase + " - ";
  pre_save.textContent += entriesStr;
  increment_btn.textContent = 0
  increase = 0
}