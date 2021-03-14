const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (JSON.stringify(arr.flat()) === JSON.stringify(arr)){
      return 1;
    }

    const newArr = arr.flat();
    return 1 + this.calculateDepth(newArr);
  }
};