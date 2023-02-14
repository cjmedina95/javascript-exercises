// Loops through an indefinite length list of arguments,
// then checks arrayList for whether it includes that argument.
// If so, the function calls splice() and continues to the next argument.

const removeFromArray = function(arrayList, ...args) {
    for (let i=0; i < args.length; i++) {
        if (arrayList.includes(args[i])) {
            arrayList.splice(arrayList.indexOf(args[i]), 1);
        }
    }

    return arrayList;
};

// Do not edit below this line
module.exports = removeFromArray;
