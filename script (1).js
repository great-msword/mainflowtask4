let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    updateScreen();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        compute();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation;
    operation = null;
    previousNumber = '';
    updateScreen();
}

function clearScreen() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').value = currentNumber;
}
