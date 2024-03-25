function increaseValue(event) {
  let inputElement = document.getElementById("numValue");
  console.log("Original: ", inputElement.value);
  let newValue = inputElement.value + 1;
  
  console.log("New Value: ", newValue);
}

function decreaseValue(event) {}
