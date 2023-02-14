// Check if count() is greater or equal to zero,
// then uses the String.prototype.repeat() method
// to duplicate the string. repeat() is used since
// it also returns an empty string if count == 0.

const repeatString = function(word, count) {
    return count >= 0 ? word.repeat(count) : 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
