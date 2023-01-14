const button = 

function getResults() {
  const animal = document.getElementById("input[name='animal']:checked").value;
  const allergy = document.getElementById("input[name='allergy']:checked").value;
  const soup = document.getElementById("input[name='soup']:checked").value;
  const shoes = document.getElementById("input[name='shoes']:checked").value;
}

function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  //document.getElementById("sorry").setAttribute("class", "hidden");
}

document.querySelector("form").onsubmit = function(event) {
  hideResults();
  event.preventDefault();
  const age = parseInt(document.querySelector("input#age").value);
  const height = parseInt(document.querySelector("input#height").value);

  if (age >= 12 && height >= 60) {
    document.getElementById("swings").removeAttribute("class");
    document.getElementById("coaster").removeAttribute("class");
    document.getElementById("tower").removeAttribute("class");
  } else if (age >= 12 || height >= 48) {
    document.getElementById("swings").removeAttribute("class");
    document.getElementById("coaster").removeAttribute("class");
    // Next, we're evaluating the Swings ride.
  } else if (age >= 6) {
    document.getElementById("swings").removeAttribute("class");
    // Finally, we have our "catch-all" for when a user is less than 6 years old.
  } else {
    document.getElementById("sorry").removeAttribute("class");
  }
};