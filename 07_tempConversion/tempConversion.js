// Uses standard formulae for converting between celsius and fahrenheit.
// Because toFixed() includes trailing zeroes, a + to return the numeric
// value of the object is required to remove any unneeded decimal values.
const convertToCelsius = function(temp) {
  return +((temp - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function(temp) {
  return +((temp * (9/5)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
