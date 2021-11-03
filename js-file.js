const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

function operate(op, num1, num2) {
    if (op == add) {
        return add(num1, num2);
    } else if (op == subtract) {
        return subtract(num1, num2);
    } else if (op == multiply) {
        return multiply(num1, num2);
    } else if (op == divide) {
        return divide(num1, num2);
    } else {
        return ("Not a valid operation, Choose from [add, subtact, multiply, divide]")
    }
}

