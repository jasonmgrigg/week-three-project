// writes first set of numbers without the operator to the variable firstNumber.

var buttonArray = document.querySelectorAll("button");
var firstNumberArray = [];
var output = document.getElementById("input")
var parsed = [];

for(i = 0; i < buttonArray.length; i++){
  let buttonId = document.getElementById(buttonArray[i].id);

  if(buttonId.id === "1" || buttonId.id === "2" || buttonId.id === "3" || buttonId.id === "4" || buttonId.id === "5" || buttonId.id === "6" || buttonId.id === "7" || buttonId.id === "8" || buttonId.id === "9" || buttonId.id === "0" || buttonId.id === "." || buttonId.id === "-" || buttonId.id === "+" || buttonId.id === "/" || buttonId.id === "*" || buttonId.id === "equals"){
    buttonId.addEventListener('click', function storePrint(){
      firstNumberArray.push(buttonId.id);
      output.textContent = firstNumberArray.join("");
    });

  }
}


var equals = document.getElementById("equals");
var firstNumber = "";
var total = "";
var output = document.getElementById("input")
  firstNumberArray = [];
  equals.onclick = function(){
    var str = firstNumberArray;
    for(i = 0; i < firstNumberArray.length - 1; i++){
      firstNumber += str[i];

}
    total = eval(firstNumber);
    output.textContent = total;
}


var clear = document.getElementById("clear")
var output = document.getElementById("input")
  clear.onclick = function(){
    output.textContent = "";
    firstNumberArray = [];
    firstNumber = "";
  }
