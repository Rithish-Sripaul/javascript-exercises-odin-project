const palindromes = function (str) {
  let palindromeStr = str.toLowerCase().replace(/[^a-z]/g, "");
  return palindromeStr.split("").reverse().join("") == palindromeStr;
};

// Do not edit below this line
module.exports = palindromes;
