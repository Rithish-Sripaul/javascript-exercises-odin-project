const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  const sumNums = nums.reduce((total, num) => total + num, 0);
  return sumNums;
};

const multiply = function (nums) {
  const multNums = nums.reduce((total, num) => total * num, 1);
  return multNums;
};

const power = function (a, b) {
  let value = 1;
  for (let i = 1; i <= b; i++) {
    value = value * a;
  }
  return value;
};

const factorial = function (num) {
  let value = 1;
  for (let i = 1; i <= num; i++) {
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
