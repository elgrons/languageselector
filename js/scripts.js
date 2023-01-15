//User Interface Logic
function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  }

function getResults(event) {
  event.preventDefault();
  const animal = parseInt(document.querySelector("input[name='animal']:checked").value);
  const allergy = parseInt(document.querySelector("input[name='allergy']:checked").value);
  const soup = parseInt(document.querySelector("input[name='soup']:checked").value);
  const shoes = parseInt(document.querySelector("input[name='shoes']:checked").value);
  const resultRange = animal + allergy + soup + shoes;
console.log(resultRange)
  if (resultRange <= 4) {
    document.getElementById("ruby").removeAttribute("class");
  } 
    else if (resultRange >4 || resultRange <7) {
    document.getElementById("python").removeAttribute("class");
  }
    else if (resultRange >= 7) {
      document.getElementById("rust").removeAttribute("class");
  }

  //document.getElementById('language-form').reset();
};

window.addEventListener("load", function() {
  const form = document.getElementById("language-form")
  form.addEventListener("submit", getResults);
});