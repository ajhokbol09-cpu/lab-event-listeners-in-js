// Change the page to a random color when the button is clicked.
function changeBackgroundColor() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

// Set the page background back to its default color.
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Show the key that was pressed on the page.
function displayKeyPress(event) {
  let keyDisplay = document.getElementById('keyPressDisplay')
  keyDisplay.textContent = 'Key pressed: ' + event.key
}

// Show the text field's current value as the user types.
function displayUserInput() {
  let input = document.getElementById('textInput').value
  let inputDisplay = document.getElementById('textInputDisplay')
  inputDisplay.textContent = 'You typed: ' + input
}

// Connect the buttons, keyboard, and text field to their event handlers.
function setupEventListeners() {
  let changeButton = document.getElementById('changeColorButton')
  let resetButton = document.getElementById('resetColorButton')
  let textInput = document.getElementById('textInput')

  // Clicking the first button changes the background color.
  changeButton.addEventListener('click', changeBackgroundColor)

  // Double-clicking the reset button or anywhere on the page resets the color.
  resetButton.addEventListener('dblclick', resetBackgroundColor)
  document.body.addEventListener('dblclick', resetBackgroundColor)

  // Show each key pressed and update the text display while typing.
  document.addEventListener('keydown', displayKeyPress)
  textInput.addEventListener('input', displayUserInput)
}

// Wait until the page elements are loaded before adding the listeners.
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}