const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];
  for (let i = 0; i <= arr.length - 1; i += 1) {
    let current = arr[i];
    let prev = arr[i - 1];
    let next = arr[i + 1];
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        if (arr[i - 2] !== '--discard-next') result.pop();
        break;
      case '--double-next':
        if (next !== undefined) result.push(next);
        break;
      case '--double-prev':
        if (prev !== undefined && arr[i - 2] !== '--discard-next') result.push(prev);
        break;
      default: result.push(current);
    }
  }

  return result;
};
