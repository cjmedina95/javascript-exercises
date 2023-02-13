const removeFromArray = function(arrayList, item) {
    for (let i=1; i < arguments.length; i++) {
        arrayList = arrayList.filter(item => item in arrayList);
        console.log(arguments[i]);
        console.log(arrayList);
    }
};

// Do not edit below this line
module.exports = removeFromArray;
