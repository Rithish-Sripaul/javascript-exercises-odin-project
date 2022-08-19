const removeFromArray = function (arr, ...arg) {
  return arr.filter((ele) => !arg.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
