window.onload = () => {
  let operator = '+';

  function calculate() {
    const text1 = document.getElementById('num1').value;
    const text2 = document.getElementById('num2').value;
    const message = document.getElementById('message');

    if (text1 === '' || text2 === '') {
      message.innerText = '';
      return;
    }
    const num1 = Number(text1);
    const num2 = Number(text2);
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
  document.getElementById('num1').addEventListener('keyup', calculate);
  document.getElementById('num2').addEventListener('keyup', calculate);
  document.getElementsByName('operator').forEach((element) => {
    element.addEventListener('change', () => {
      operator = element.id;
      calculate();
    });
  });
};
