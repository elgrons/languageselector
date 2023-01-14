function getResults(event) {
  event.preventDefault();
  const animal = document.querySelector("input[name='animal']:checked").value;
  console.log(animal);
  const allergy = document.querySelector("input[name='allergy']:checked").value;
  console.log(allergy);
  const soup = document.querySelector("input[name='soup']:checked").value;
  console.log(soup);
  const shoes = document.querySelector("input[name='shoes']:checked").value;
  console.log(shoes);
};

window.addEventListener("load", function() {
  const form = document.getElementById("language-form")
  form.addEventListener("submit", getResults);
});


// function hideResults() {
//   document.getElementById("ruby").setAttribute("class", "hidden");
//   document.getElementById("python").setAttribute("class", "hidden");
//   document.getElementById("rust").setAttribute("class", "hidden");
//   //document.getElementById("sorry").setAttribute("class", "hidden");
// }

// //document.querySelector("form").onsubmit = function(event) {
//   hideResults();
//   event.preventDefault();
//   const age = parseInt(document.querySelector("input#age").value);
//   const height = parseInt(document.querySelector("input#height").value);

//  // if () {
//     document.getElementById("ruby").removeAttribute("class");
//     document.getElementById("python").removeAttribute("class");
//     document.getElementById("rust").removeAttribute("class");
//   }// else if () {
//     document.getElementById("python").removeAttribute("class");
//     document.getElementById("rust").removeAttribute("class");
//   }//else if () {
//     document.getElementById("rust").removeAttribute("class");
  
//   } //else {
//     document.getElementById("sorry").removeAttribute("class");
//   }
// };