const rogersInput = function(event) {
  event.preventDefault();
  let input1 = parseInt(document.getElementById("input1").value);
  let rogersArray = []
  console.log(input1);
  for (let index = 0; index <= input1; index++) {
    console.log(rogersArray)
    rogersArray.push(index);
    console.log(rogersArray)
    let newRogersArray = []
    newRoggersArray.push(rogersArray)
      console.log(newArray)
      if (newRogersArray.index === 1) {
        return "Beep!"
      } else if (newRogersArray.index === 2 || newRogersArray.index === 1) {
        return "Boop!"
      } else if (newRogersArray.index === 3 || newRogersArray.indexd === 2 || newRogersArray.index === 1) {
        return "Won't you be my neighbor?"
      } else {
        return newRogersArray
       
      }
      
    };
  };


  
  window.addEventListener("load", function () {
    const form = document.getElementById("roger");
    form.addEventListener("submit", rogersInput);
  });