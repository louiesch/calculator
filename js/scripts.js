
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
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});