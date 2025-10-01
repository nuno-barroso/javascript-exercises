const removeFromArray = function(arr, ...elements) {
    return arr.filter((element) => !(elements.includes(element)));
};

console.log(removeFromArray([1, 2, 2, 4], 2));
// Do not edit below this line
module.exports = removeFromArray;
