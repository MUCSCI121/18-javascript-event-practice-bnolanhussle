let inputValue = 0;
let userEvents = [];

function increaseValue(event) {
  let inputElement = document.getElementById("numValue");
  let oldValue = inputValue;
  inputValue = inputValue + 1;
  inputElement.value = inputValue;
  userEvents.push("User requested increase from " + oldValue + " to " + new)
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
