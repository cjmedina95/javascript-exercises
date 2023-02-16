const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.length == 0 ? 0 : numbers.reduce(add);
};

const multiply = function(numbers) {
  return numbers.reduce(function(num1, num2) {
    return num1 * num2;
  });
};

const power = function(num1, exponent) {
	return Math.pow(num1, exponent);
};

const factorial = function(num1) {
	if (num1 === 1 || num1 === 0) {
    return 1;
  }
  return num1 * factorial(num1 - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
