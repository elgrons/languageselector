function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  //document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.getElementById("language-form").onsubmit = function(event) {
    event.preventDefault();
    const animal = document.querySelector("input[name='animal']:checked").value;
    const allergy = document.querySelector("input[name='allergy']:checked").value;
    const soup = document.querySelector("input[name='soup']:checked").value;
    const shoes = document.querySelector("input[name='shoes']:checked").value;

    if (animal = 'a') {
  document.getElementById("radio-form").removeAttribute("class");
    } else {
      if (animal === "a" && allergy === "b") {
      document.getElementById("ruby").removeAttribute("class");
      document.getElementById("python").removeAttribute("class");
      document.getElementById("rust").removeAttribute("class");
      }
      else if (allergy = shoes) {
      document.getElementById("python").removeAttribute("class");
      document.getElementById("rust").removeAttribute("class");
      }
      else if (soup === shoes) {
      document.getElementById("rust").removeAttribute("class");
      }
    }
};
};
