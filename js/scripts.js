//User Interface Logic
function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  }

function getResults(event) {
  let form = document.getElementById("language-form")
  event.preventDefault();
  const animal = parseInt(document.querySelector("input[name='animal']:checked").value);
  const allergy = parseInt(document.querySelector("input[name='allergy']:checked").value);
  const soup = parseInt(document.querySelector("input[name='soup']:checked").value);
  const shoes = parseInt(document.querySelector("input[name='shoes']:checked").value);
  const resultRange = animal + allergy + soup + shoes;

  if (resultRange <= 5) {
    document.getElementById("ruby").removeAttribute("class");
  } 
    else if (resultRange <= 7) {
    document.getElementById("python").removeAttribute("class");
  }
    else if (resultRange >= 8) {
      document.getElementById("rust").removeAttribute("class");
    };

  form.addEventListener("submit", getResults), function() {
    let form = document.getElementById("language-form")
    reset.removeAttribute("class");
  }
};

window.addEventListener("load", function() {
  let form = document.getElementById("language-form")
  let resetButton = document.getElementById("reset");
  form.addEventListener("submit", getResults);

  resetButton.addEventListener("click", function() {
    document.getElementById("language-form").reset();
    form.addEventListener("reset", hideResults);
  });
});