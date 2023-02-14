// Loops through an indefinite length list of arguments,
// then checks arrayList for whether it includes that argument.
// If so, the function calls splice() and continues to the next argument.

const removeFromArray = function(arrayList, args) {
    for (let i=1; i < arguments.length; i++) {
        if (arrayList.includes(arguments[i])) {
            arrayList.splice(arrayList.indexOf(arguments[i]), 1);
        }
    }

    return arrayList;
};

// Do not edit below this line
module.exports = removeFromArray;
