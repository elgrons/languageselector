// User Interface Logic

function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

function hideResultsAndError() {
  // New line of code to hide the error message.
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}
  
window.onload = function() {
  document.getElementById("radio-form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    hideResultsAndError();
    const radioSelection1 = document.getElementById("input[name='animal']:checked").value;
    const radioSelection2 = document.getElementById("input[name='allergy']:checked").value;
    const radioSelection3 = document.getElementById("input[name='soup']:checked").value;
    const radioSelection4 = document.getElementById("input[name='shoes']:checked").value;
    const radioSelection5 = document.getElementById("input[name='age']:checked").value;

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

//radio form
//function handleRadio(event) {
 // event.preventDefault();
  //const radioSelection = document.querySelector("input[name='flavor']///:checked").value;
//}

//window.addEventListener("load", function() {
 // document.getElementById("radio-form").addEventListener("submit", handleRadio);
//});