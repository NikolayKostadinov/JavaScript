function sumTable() {
    let cellElements = document.querySelectorAll("td:nth-of-type(2n)");

    let numbers = Array.from(cellElements);
    let result = numbers.pop();
    
    let sum = 0;
    numbers.forEach(x => sum += Number(x.textContent));
    result.textContent = sum;
}