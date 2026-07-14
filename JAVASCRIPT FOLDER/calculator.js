const display = document.getElementById('display');
let expression = '';
let lastKeyWasOperator = false;

function updateDisplay() {
  display.value = expression || '0';
}

function appendValue(value) {
  if (value === '.' && expression.includes('.')) {
    return;
  }

  if (lastKeyWasOperator && value !== '.') {
    expression = expression.slice(0, -1);
  }

  expression += value;
  lastKeyWasOperator = false;
  updateDisplay();
}

function handleOperator(operator) {
  if (!expression) return;

  if (lastKeyWasOperator) {
    expression = expression.slice(0, -1) + operator;
  } else {
    expression += operator;
  }

  lastKeyWasOperator = true;
  updateDisplay();
}

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === 'clear') {
      expression = '';
      lastKeyWasOperator = false;
      updateDisplay();
      return;
    }

    if (action === 'delete') {
      expression = expression.slice(0, -1);
      lastKeyWasOperator = false;
      updateDisplay();
      return;
    }

    if (action === 'equal') {
      try {
        const result = Function(`"use strict"; return (${expression})`)();
        expression = String(result);
      } catch (error) {
        expression = 'Error';
      }
      lastKeyWasOperator = false;
      updateDisplay();
      return;
    }

    if (value) {
      if (['+', '-', '*', '/'].includes(value)) {
        handleOperator(value);
      } else {
        appendValue(value);
      }
    }
  });
});
