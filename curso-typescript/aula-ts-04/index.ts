function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number) {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

function finaly(): void | string {
    const inputNum1 = prompt("First Number");
    const inputNum2 = prompt("Second Number");

    const num1 = parseInt(inputNum1);
    const num2 = parseInt(inputNum2);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = sum(num1, num2);
        result += multiply(1, 2);
        showResult(result);
    } else {
        return "Não é possível compilar com tal entrada.";
    }
};

finaly();