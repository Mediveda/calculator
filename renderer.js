let displayValue = '';

function backspace() {
    displayValue = '';
    document.getElementById('display').value=displayValue;
}

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value=displayValue; 
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value=displayValue;
    } catch (error) {
       // displayValue = 'Error';
        document.getElementById('display').value=displayValue;
    }
}

/*function updateDisplay() {
    document.getElementById('display').value=displayValue;
    //display.value = displayValue;
}
*/

