//Business Logic
let rogersArray = []
function replaceRogersNumbers(userInput) {
  let rogersArray = []
  for (let index = 0; index <= userInput; index++) {
    let indexString = index.toString()
    let b = "bleep!"
    let c = "bloop!"
    let d = "Won't you be my neighbor?"
      if (indexString.includes("3")) {
        rogersArray.push(d)
      } else if (indexString.includes("2")) {
        rogersArray.push(c)
      } else if (indexString.includes("1")) {
        rogersArray.push(b)
      } else {
        rogersArray.push(index);
      }
      console.log(rogersArray)
  };
    return "Results: " + rogersArray;
}

//User Logic


const rogersInput = function(event) {
  event.preventDefault();
  document.getElementById("results").innerText = "Results: ";
  let input1 = parseInt(document.getElementById("input1").value);
  document.getElementById("results").innerText = replaceRogersNumbers(input1);
}

window.addEventListener("load", function () {
  const form = document.getElementById("roger");
  form.addEventListener("submit", rogersInput);
});