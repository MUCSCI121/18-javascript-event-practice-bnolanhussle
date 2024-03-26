// This will hold the value of the input field
let currentValue = 0;
// All log entries will be added to this array
let logs = [];

/** 
  Updates the value displayed in the <input> element
*/
function updateDisplayedValue() {
  const inputElement = document.getElementById("valueDisplay");
  inputElement.value = currentValue;
}

/** 
  Callback for when the user manually enters a value in the <input> element.  The event parameter
  is passed in from the oninput event and allows us to access the value that was entered into the 
  input element.
*/
function userInputValue(event) {
  // Grab the new value and convert it from a string to an integer
  const newValue = parseInt(event.target.value);
  if (newValue >= 0) {
    currentValue = newValue;
    logs.push("User entered number, requested value " + newValue + ", set to " + currentValue);
  } else {
    currentValue = 0;
    updateDisplayedValue();
    logs.push("User entered invalid value " + event.target.value);
  }
}

/** 
  Callback for when the user clicks the decrease button.  The value in the input element 
  will be decreased by one as long as it doesn't go below zero.  
*/
function decreaseValue() {
  let originalValue = currentValue;
  if (currentValue > 0) {
    currentValue--;
    updateDisplayedValue();
    logs.push("User requested decrease from " + originalValue + " to " + currentValue);
  } else {
    logs.push("User requested invalid decrease from " + originalValue + " to " + (originalValue - 1));
  }
}

/** 
  Callback for when the user clicks the increase button.  Increases the value in the input element
  by one
*/
function increaseValue() {
  let originalValue = currentValue;
  currentValue++;
  updateDisplayedValue();

  logs.push("User requested increase from " + originalValue + " to " + currentValue);
}

/** 
  Resets the value in the input element to zero and hides the log section
*/
function resetValue() {
  logs.push("User requested reset at " + currentValue);
  const divContainerElement = document.getElementById("logs");
  divContainerElement.style.visibility = "hidden";

  currentValue = 0;
  updateDisplayedValue();
}

/** 
  Updates the log section so that it is visible on the page
*/
function showLogs() {
  logs.push("Show logs requested");
  const divContainerElement = document.getElementById("logs");
  divContainerElement.style.visibility = "visible";

  // The array type has a function called join() that will combine all of the item values
  // into one long string.  The value passed into the function is what will be used as the 
  // separator between each of the values.  In this case the <br> element is used so that
  // each log item is on it's own line.
  const formattedLogs = logs.join("<br />");
  const divLogElement = document.getElementById("logEntries");

  // The innerHTML propery lets us inject a raw HTML string into the element for display on the page
  divLogElement.innerHTML = formattedLogs;
}