const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members.reduce((acc, item) => {
    if (typeof item === 'string') {
      acc += item.trim()[0].toUpperCase();
      return acc;
    }
    return acc;
  }, '').split('').sort().join('');
};
