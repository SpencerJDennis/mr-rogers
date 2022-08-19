const rogersInput = function(event) {
  event.preventDefault();
  let countTo = parseInt(document.getElementById("input1").value);
  let newArray = [];
  console.log(countTo);
  for (let index = 0; index <= countTo; index +=1) {
    console.log(newArray)
      if (index === 1) {
        return "Beep!"
      } else if (index === 2 || index === 1) {
        return "Boop!"
      } else if (index === 3 || index === 2 || index === 1) {
        return "Won't you be my neighbor?"
      } else {
      }
      newArray.push(index);
    
    }
  };


  
  window.addEventListener("load", function () {
    const form = document.getElementById("roger");
    form.addEventListener("submit", rogersInput);
  }
  )