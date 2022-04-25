let operator = '+';
const message = document.getElementById('message');
const num1Text = document.getElementById('num1');
const num2Text = document.getElementById('num2');

function calculate() {
  if (num1Text.value === '' || num2Text.value === '') {
    message.innerText = '';
    return;
  }
  const num1 = Number(num1Text.value);
  const num2 = Number(num2Text.value);
  message.className = 'error';
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      if (num2 === 0) {
        message.innerText = 'Divisor should not be 0';
        return;
      }
      result = num1 / num2;
  }
  message.className = 'normal';
  message.innerText = `${num1} ${operator} ${num2} = ${result}`;
}

num1Text.addEventListener('keyup', calculate);
num2Text.addEventListener('keyup', calculate);

document.getElementsByName('operator').forEach((element) => {
  element.addEventListener('change', () => {
    operator = element.id;
    calculate();
  });
});
