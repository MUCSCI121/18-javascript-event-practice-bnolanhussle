let inputValue = 0;

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
