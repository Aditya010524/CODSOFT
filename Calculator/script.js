// Selecting Elements
const screen = document.getElementById('screen');
const history = document.getElementById('history');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function updateScreen(value) {
  screen.innerText = value;
}

function addHistory(entry) {
  const newEntry = document.createElement('div');
  newEntry.innerText = entry;
  history.appendChild(newEntry);
}

// Button Click Handling
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');
    
    if (!isNaN(action) || action === '.') {
      if (currentInput === '0' && action !== '.') currentInput = '';
      currentInput += action;
      updateScreen(currentInput);
    }

    if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
      firstOperand = currentInput;
      operator = action;
      currentInput = '';
    }

    if (action === 'clear') {
      currentInput = '0';
      firstOperand = '';
      secondOperand = '';
      operator = '';
      updateScreen(currentInput);
      history.innerHTML = "History:";
    }

    if (action === 'backspace') {
      currentInput = currentInput.slice(0, -1) || '0';
      updateScreen(currentInput);
    }

    if (action === 'calculate') {
      secondOperand = currentInput;
      const result = calculate(firstOperand, secondOperand, operator);
      addHistory(`${firstOperand} ${getOperatorSymbol(operator)} ${secondOperand} = ${result}`);
      currentInput = result;
      updateScreen(currentInput);
      firstOperand = '';
      operator = '';
    }
  });
});

// Calculation Logic
function calculate(num1, num2, operator) {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  switch (operator) {
    case 'add': return n1 + n2;
    case 'subtract': return n1 - n2;
    case 'multiply': return n1 * n2;
    case 'divide': return n2 !== 0 ? n1 / n2 : 'Error';
    default: return num1;
  }
}

// Helper function to display symbols
function getOperatorSymbol(operator) {
  switch (operator) {
    case 'add': return '+';
    case 'subtract': return '-';
    case 'multiply': return '*';
    case 'divide': return '/';
    default: return '';
  }
}
