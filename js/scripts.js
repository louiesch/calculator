
// Business logic

function add(number1, number2) {
  let result = number1 + number2;
  return result;
};

function subtract(number1, number2) {
  let result = number1 - number2;
  return result;
};

function multiply(number1, number2) {
  let result = number1 * number2;
  return result;
};

function divide(number1, number2) {
  let result = number1 / number2;
  return result;
};

// Below is UI logic

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#add1").val());
    let number2 = parseInt($("#add2").val());
    let result = add(number1, number2);
    $("#outputAdd").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#subtract1").val());
    let number2 = parseInt($("#subtract2").val());
    let result = subtract(number1, number2);
    $("#outputSubtract").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#multiply1").val());
    let number2 = parseInt($("#multiply2").val());
    let result = multiply(number1, number2);
    $("#outputMultiply").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#divide1").val());
    let number2 = parseInt($("#divide2").val());
    let result = divide(number1, number2);
    $("#outputDivide").text(result);
  });
});