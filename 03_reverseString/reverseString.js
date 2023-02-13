// Accepts a string and splits it into an array of characters.
// Then uses the reverse() function to reorder the array.
// Finally, rejoins the reversed array. join('') and split('')
// use empty strings to avoid including commas in
// the returned string.

const reverseString = function(str) {
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
