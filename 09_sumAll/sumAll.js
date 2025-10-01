const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !(Number.isInteger(a)) || !(Number.isInteger(b)) || isNaN(a) || isNaN(b)) {
        return "ERROR";
    }

    if (a > b) {
        let aux = 0;
        aux = b;
        b = a;
        a = aux;
    }

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
