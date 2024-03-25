let inputValue = 0;
let 

function increaseValue(event) {
  let inputElement = document.getElementById("numValue");
  inputValue = inputValue + 1;
  inputElement.value = inputValue;
}

function decreaseValue(event) {
  let inputElement = document.getElementById("numValue");
  if (inputValue > 0) {
    inputValue = inputValue - 1;
    inputElement.value = inputValue;
  }
}

function updateValue(event) {
  let inputElement = document.getElementById("numValue");
  let newValue = inputElement.value;
  inputValue = parseInt(newValue);
  if (inputValue < 0) {
    inputValue = 0;
  }
  inputElement.value = inputValue;
}

function resetValue(event) {
  inputValue = 0;
  let inputElement = document.getElementById("numValue");
  inputElement.value = inputValue;
}
