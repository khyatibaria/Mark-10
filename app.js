var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var btnNext = document.querySelector("#next");
var btnCheck = document.querySelector("#check");
var cashDiv = document.querySelector(".show");
var notestoReturn = document.querySelectorAll(".noOfNotes");
var outputDiv = document.querySelector(".output");
var error = document.querySelector(".errorMsg");

var allNotes = [2000, 500, 100, 20, 10, 5, 1];


function showDiv() {
  error.style.display = "none";
  if (billAmount.value > 0) {
    cashDiv.style.display = "Block";
  } else {
    errorMsg("Please Enter Valid Bill Amount");
  }
}

function errorMsg(message) {
  error.style.display = "Block";
  error.innerText = message;
}

function calculate() {

  if (cashGiven.value > billAmount.value) {
    var amountReturn = cashGiven.value - billAmount.value;
    for (var i = 0; i < allNotes.length; i++) {
      const change = Math.trunc(amountReturn / allNotes[i]);
      amountReturn %= allNotes[i];
      notestoReturn[i].innerText = change;
    }
    outputDiv.style.display = "Block";
  } 
  else {

    errorMsg("Cash Amount should atleast be equal to Bill Amount");
  }

}


btnNext.addEventListener("click", showDiv)

btnCheck.addEventListener("click", calculate)