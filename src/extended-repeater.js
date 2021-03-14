const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const initialString = String(str);
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;

  let repeatString = '';
  if (options.hasOwnProperty("addition")) {
    const addition = options.addition;
    for (let i = 0; i < additionRepeatTimes - 1; i += 1) {
      repeatString += addition + additionSeparator;
    }
    repeatString += addition;
  }

  let resultString = initialString + repeatString;
  let result = '';
  for (let j = 0; j < repeatTimes - 1; j += 1) {
    result += resultString + separator;
  }
  result += resultString;

  return result;
};
  