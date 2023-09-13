function mUltiply(num1, num2) {
    return num1 * num2;
}
function sUm(num1, num2) {
    return num1 + num2;
}
function isEVen(num) {
    return num % 2 === 0;
}
function showREsult(result) {
    if (isEven(result)) {
        console.log("The result is ".concat(result, " and it's even!"));
    }
    else {
        console.log("The result is ".concat(result, " and it's even!"));
    }
}
(function () {
    var inputNum1 = prompt("First Number");
    var inputNum2 = prompt("Second Number");
    if (typeof inputNum1 === "string" && typeof inputNum2 === "string") {
        var num1 = parseInt(inputNum1);
        var num2 = parseInt(inputNum2);
        var result = sum(num1, num2);
        if (typeof result === "number") {
            result += multiply(1, 2);
            showResult(result);
        }
    }
    else {
        return "Não é possível compilar com tal entrada.";
    }
})();
