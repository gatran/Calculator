
document.getElementById("grid-item-head").innerText = '0';
var values = [];
var op = true;

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

function operate() {
    // Push the last number of values to our array of values
    var input = document.getElementById("grid-item-head").innerText;
    for (var i = 0; i < values.length; i++) {
        input = input.replace(values[i], '');
    }
    values.push(input);

    // Splice works by placing our item at the specified location and removing the three values
    if (values.indexOf('*') != -1) {
        var op_location = values.indexOf('*');
        var num1 = values[op_location - 1];
        var num2 = values[op_location + 1];
        values.splice(op_location - 1, 3, multiply(parseInt(num1), parseInt(num2)));
    }  else if  (values.indexOf('/') != -1) {
        var op_location = values.indexOf('/');
        var num1 = values[op_location - 1];
        var num2 = values[op_location + 1];
        if (num2 == 0) {
            document.getElementById("grid-item-head").innerText = "Can't do that lol.";
            return
        }
        values.splice(op_location - 1, 3, divide(parseInt(num1), parseInt(num2)));
    }  else if  (values.indexOf('+') != -1) {
        var op_location = values.indexOf('+');
        var num1 = values[op_location - 1];
        var num2 = values[op_location + 1];
        values.splice(op_location - 1, 3, add(parseInt(num1), parseInt(num2)));
    }  else if  (values.indexOf('-') != -1) {
        var op_location = values.indexOf('-');
        var num1 = values[op_location - 1];
        var num2 = values[op_location + 1];
        values.splice(op_location - 1, 3, subtract(parseInt(num1), parseInt(num2)));
    }
    if (values[0].toString().length > 10) {
        document.getElementById("grid-item-head").innerText = parseFloat(values[0].toPrecision(10));
    } else {
        document.getElementById("grid-item-head").innerText = parseFloat(values[0]);
    }
}

function display(val) {
    if (document.getElementById("grid-item-head").innerText == 0) {
        document.getElementById("grid-item-head").innerText = val;
    } else if (document.getElementById("grid-item-head").innerText.length > 10) {
        if (values.at(-1) == '*' || values.at(-1) == '/' || values.at(-1) == '+' || values.at(-1) == '-') {
            document.getElementById("grid-item-head").innerText = 0;
        }
        document.getElementById("grid-item-head").innerText = document.getElementById("grid-item-head").innerText;
    } else if (op == false) {
        op = true;
        document.getElementById("grid-item-head").innerText = val;
    } else {
        document.getElementById("grid-item-head").innerText += val;
    }
}

function display_operator(val) {
    // Push our values into an array, splitting our list items by numbers and operations
    if (values.length > 0) {
        var input = document.getElementById("grid-item-head").innerText;
        for (var i = 0; i < values.length; i++) {
            input = input.replace(values[i], '');
        }
        values.push(input);
        values.push(val);
        op = false;
    } else {
        values.push(document.getElementById("grid-item-head").innerText);
        values.push(val);
        op = false;
    }
}

function clearDisplay() {
    document.getElementById("grid-item-head").innerText = 0;
    values = [];
}

function posNeg() {
    if (parseInt(document.getElementById("grid-item-head").innerText) > 0) {
        document.getElementById("grid-item-head").innerText = '-' + document.getElementById("grid-item-head").innerText;
    } 
}

function mod() {
    document.getElementById("grid-item-head").innerText = parseInt(document.getElementById("grid-item-head").innerText) / 100;
}