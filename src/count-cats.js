const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.reduce((acc, row) => {
    const catsNumber = row.filter(item => item === '^^').length;
    return acc += catsNumber;
  }, 0);
};
