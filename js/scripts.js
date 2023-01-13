function getResults() {
  const animal = document.querySelector("input[name='animal']:checked").value;
  const allergy = document.querySelector("input[name='allergy']:checked").value;
  const soup = document.querySelector("input[name='soup']:checked").value;
  const shoes = document.querySelector("input[name='shoes']:checked").value;
}

function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  //document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.getElementById("language-form").onclick = function(event) {
    event.preventDefault();

    if (animal === soup) {
  document.getElementById("ruby").removeAttribute("class");
    } else if (soup = shoes) {
      document.getElementById("ruby").removeAttribute("class");
      }
      else if (allergy = shoes) {
      document.getElementById("python").removeAttribute("class");
      }
      else if (soup === age) {
      document.getElementById("rust").removeAttribute("class");
      }
    }
};
