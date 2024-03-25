let inputValue = 0;
let userEvents = [];

function increaseValue(event) {
  let inputElement = document.getElementById("numValue");
  let oldValue = inputValue;
  inputValue = inputValue + 1;
  inputElement.value = inputValue;
  userEvents.push(
    "User requested increase from " + oldValue + " to " + newValue
  );
}

function decreaseValue(event) {
  let inputElement = document.getElementById("numValue");
  let oldValue = inputValue;
  if (inputValue > 0) {
    inputValue = inputValue - 1;
    inputElement.value = inputValue;
  }
  userEvents.push(
    "User requested decrease from " + oldValue + " to " + newValue
  );
}

function updateValue(event) {
  let inputElement = document.getElementById("numValue");
  let newValue = inputElement.value;
  inputValue = parseInt(newValue);
  if (inputValue < 0) {
    inputValue = 0;
  }
  inputElement.value = inputValue;
  userEvents.push("User typed new value " + event.target.value);
}

function resetValue(event) {
  inputValue = 0;
  let inputElement = document.getElementById("numValue");
  inputElement.value = inputValue;
  userEvents.push("User requested a reset");
}

function displayLogs(event){
    let index = 0;
    let displayText = "";
    while(index < userEvents.length){
        displayText += userEvents[idx] + "<br>"
    }
    let divLogs = document.getElementById("logs");
    
}
