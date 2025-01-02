// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character in the display
function deleteLast() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    var displayValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(displayValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
