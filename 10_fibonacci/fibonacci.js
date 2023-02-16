// Fibonacci function defined at https://en.wikipedia.org/wiki/Fibonacci_number
// 
const fibonacci = function(endPos) {
    if (endPos < 0) {
        return "OOPS";
    }

    const phi = 1.618033988749895; // As represented in Math.js
    const golden = Math.pow(phi, endPos);
    const divisor = Math.sqrt(5);
    return(Math.round(golden / divisor));
};

// Do not edit below this line
module.exports = fibonacci;
