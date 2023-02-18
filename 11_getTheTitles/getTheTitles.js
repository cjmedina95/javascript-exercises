// Maps the title object to a new array, then returns the array.
const getTheTitles = function(books) {
    const titles = books.map(({title}) => (title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
