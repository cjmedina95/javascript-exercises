function addNums(priorSum, currentNumber) {
    return priorSum + currentNumber;
}

const sumAll = function(bound1, bound2) {
    if(!Number.isInteger(bound1) || !Number.isInteger(bound2)) {
        return "ERROR";
    }

    if (bound1 < 0 || bound2 < 0) {
        return "ERROR";
    }

    let numberList = [];
    let sum = 0;
    if (bound1 > bound2) {
        var upperBound = bound1; // var instead of let because of block scoping.
        var lowerBound = bound2;
    } 
    else if (bound2 > bound1) {
        var upperBound = bound2;
        var lowerBound = bound1;
    }
    else {
        return sum; // When both bounds are equal, the result is the original number.
    }

    for (lowerBound; lowerBound <= upperBound; lowerBound++) {
        numberList.push(lowerBound);
    }

    sum = numberList.reduce(addNums)

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
