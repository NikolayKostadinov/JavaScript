function calc() {
    // TODO: sum = num1 + num2
    let firstInput = document.getElementById('num1');
    let secondInput = document.getElementById('num2');
    
    let firstNumber = Number(firstInput.value);
    let seconNumber = Number(secondInput.value);

    let sum = document.getElementById('sum');

    sum.value =  firstNumber + seconNumber;
}
