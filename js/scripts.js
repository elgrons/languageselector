// User Interface Logic

window.onload = function() {
  document.getElementById("radio-form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    hideResultsAndError();
    const quest1 = document.querySelector("input[name='animal']:checked").value;
    const quest2 = document.querySelector("input[name='allergy']:checked").value;
    const quest3 = document.querySelector("input[name='soup']:checked").value;
    const quest4 = document.querySelector("input[name='shoes']:checked").value;

  if (radioSelection1 = radioSelection2) {
    document.getElementById("radio-form").removeAttribute("class");
    } else {
    if (radioSelection3 = radioSelection3) {
      document.getElementById("ruby").removeAttribute("class");
      //document.getElementById("python").removeAttribute("class");
      //document.getElementById("rust").removeAttribute("class");
      }
      else if (radioSelection1 = radioSelection3) {
      document.getElementById("python").removeAttribute("class");
      //document.getElementById("rust").removeAttribute("class");
      }
      //else if (age >= 6) {
        //document.getElementById("rust").removeAttribute("class");
      }
      //else {
        //document.getElementById("sorry").removeAttribute("class");
      }
    }
 // };
//};

//function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
///}

//function hideResultsAndError() {
  // New line of code to hide the error message.
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
//}

//window.addEventListener("load", function() {
  //document.getElementById("radio-form").addEventListener("submit", handleRadio);
 // event.preventDefault();
 // hideResults();
 // hideResultsAndError();
//});

//radio form
//function handleRadio(event) {
 // event.preventDefault();
  //const radioSelection = document.querySelector("input[name='flavor']///:checked").value;
//}

//window.addEventListener("load", function() {
 // document.getElementById("radio-form").addEventListener("submit", handleRadio);
//});

//from calculator example
// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;

  let result;
  if (operator === "add") {
    result = add(number1, number2);
  } else if (operator === "subtract") {
    result = subtract(number1, number2);
  } else if (operator === "multiply") {
    result = multiply(number1, number2);
  } else if (operator === "divide") {
    result = divide(number1, number2);
  }

  document.getElementById("output").innerText = result;