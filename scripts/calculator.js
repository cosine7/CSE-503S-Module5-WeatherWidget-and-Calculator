let operator = '+';
const message = document.getElementById('message');
const text1 = document.getElementById('num1');
const text2 = document.getElementById('num2');

function calculate() {
  if (text1.value === '' || text2.value === '') {
    message.innerText = '';
    return;
  }
  const num1 = Number(text1.value);
  const num2 = Number(text2.value);
  message.className = 'error';

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    message.innerText = 'Invalid Input';
    return;
  }
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
text1.addEventListener('keyup', calculate);
text2.addEventListener('keyup', calculate);
document.getElementsByName('operator').forEach((element) => {
  element.addEventListener('change', () => {
    operator = element.id;
    calculate();
  });
});
