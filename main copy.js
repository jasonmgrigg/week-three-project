// writes first set of numbers without the operator to the variable firstNumber.

var buttonArray = document.querySelectorAll("button");
var firstNumberArray = [];


for(i = 0; i < buttonArray.length; i++){
  let buttonId = document.getElementById(buttonArray[i].id);

  if(buttonId.id === "1" || buttonId.id === "2" || buttonId.id === "3" || buttonId.id === "4" || buttonId.id === "5" || buttonId.id === "6" || buttonId.id === "7" || buttonId.id === "8" || buttonId.id === "9" || buttonId.id === "0" || buttonId.id === "." || buttonId.id === "-" || buttonId.id === "+" || buttonId.id === "/" || buttonId.id === "*" || buttonId.id === "equals"){
    buttonId.addEventListener('click', function storePrint(){
      let output = document.getElementById('output');
      firstNumberArray.push(buttonId.id);
    });
  }
}
//
// // var firstNumber = "";
// // var numbersList = [];
// // var minus = document.getElementById("-");
// // minus.onclick = function(){
// //   var str = firstNumberArray;
// //   for(i = 0; i < firstNumberArray.length-1; i++){
// //     firstNumber += str[i];
// // }
// //     console.log (firstNumber);
// //     firstNumberArray = [];
// // }
//
//
// var firstNumber = "";
// var numbersList = [];
// var minus = document.getElementById("+");
// minus.onclick = function(){
//   var str = firstNumberArray;
//   for(i = 0; i < firstNumberArray.length-1; i++){
//     firstNumber += str[i];
// }
//     console.log (firstNumber);
//     firstNumberArray = [];
// }
//
//
//
// var firstNumber = "";
// var numbersList = [];
// var minus = document.getElementById("/");
// minus.onclick = function(){
//   var str = firstNumberArray;
//   for(i = 0; i < firstNumberArray.length-1; i++){
//     firstNumber += str[i];
// }
//     console.log (firstNumber);
//     firstNumberArray = [];
// }
//
// var firstNumber = "";
// var numbersList = [];
// var minus = document.getElementById("*");
// minus.onclick = function(){
//   var str = firstNumberArray;
//   for(i = 0; i < firstNumberArray.length-1; i++){
//     firstNumber += str[i];
// }
//     console.log (firstNumber);
//     firstNumberArray = [];
// }
//
// // Equals function that works for subtraction
//
// var equals = document.getElementById("equals");
// var secondNumber = "";
// var numberList = [];
// firstNumberArray = [];
// equals.onclick = function(){
//   var str = firstNumberArray;
//   for(i = 0; i < firstNumberArray.length-1; i++){
//     secondNumber += str[i];
//   }
//   console.log(firstNumber - secondNumber);
// }
//
// // End Equals funtion
//
var equals = document.getElementById("equals");
var firstNumber = "";
var secondNumber = "";
var numberList = [];
var total = "";
firstNumberArray = [];
equals.onclick = function(){
  var str = firstNumberArray;
  for(i = 0; i < firstNumberArray.length - 1; i++){
    firstNumber += str[i];

  }
  total = eval(firstNumber);
  console.log(total);
}
