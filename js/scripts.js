const rogersInput = function(event) {
  event.preventDefault();
  let countTo = parseInt(document.getElementById("input1").value);
  let newArray = [];
  console.log(countTo);
  for (let index = 0; index <= countTo; index +=1) {
    console.log(index)
    newArray.push(index);
    console.log(newArray)
  };
  }
  
  window.addEventListener("load", function () {
    const form = document.getElementById("roger");
    form.addEventListener("submit", rogersInput);
  }
  )