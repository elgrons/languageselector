//Business Logic
//function handleRadio(event) {
  //event.preventDefault();
  //const radioSelection = document.querySelector("input[name='animal']:checked").value;
//}

// User Interface Logic

function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

function hideResultsAndError() {
  // New line of code to hide the error message.
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}
  
window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    hideResultsAndError();
    const radioSelection1 = document.querySelector("input[name='animal']:checked").value;
    const radioSelection2 = document.querySelector("input[name='allergy']:checked").value;
    const radioSelection3 = document.querySelector("input[name='soup']:checked").value;
    const radioSelection4 = document.querySelector("input[name='shoes']:checked").value;
    const radioSelection5 = document.querySelector("input[name='age']:checked").value;
  if (!age || !height) {
    document.getElementById("error-message").removeAttribute("class");
    } else {
    if ("animal" = 'cat' + "soup" = 'eat') {
      document.getElementById("ruby").removeAttribute("class");
      document.getElementById("python").removeAttribute("class");
      document.getElementById("rust").removeAttribute("class");
      }
      else if (age >= 12 || height >= 48) {
      document.getElementById("python").removeAttribute("class");
      document.getElementById("rust").removeAttribute("class");
      }
      else if (age >= 6) {
        document.getElementById("rust").removeAttribute("class");
      }
      else {
        document.getElementById("sorry").removeAttribute("class");
      }
    }
  };
};

//radio form
function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor']:checked").value;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});