const rogersInput = function(event) {
  event.preventDefault();
  let rogers = "Here are your numbers: "
  let input1 = parseInt(document.getElementById("input1").value);
  let rogersArray = []
  console.log(input1);
  for (let index = 0; index <= input1; index++) {
    rogersArray.push(index);
    console.log(rogersArray)
  };
    rogers = rogersArray.concat(" " + rogersArray.toString([index]) + "!");
    console.log(rogers)
  };
  /*let newArray = []
  rogersArray.push(newArray)
  console.log(newArray)
  /*if (newArray.includes(2)) {
    return replace(/2/, "bleep!")
  }else {
    return index
  }
  console.log(newArray)*/



  
  window.addEventListener("load", function () {
    const form = document.getElementById("roger");
    form.addEventListener("submit", rogersInput);
  });