const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (isNaN(date)) throw new Error('fake data');

  const seasons = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  }

  try {
    const month = date.getMonth();

    if (seasons['winter'].includes(month)) return 'winter';
    if (seasons['spring'].includes(month)) return 'spring';
    if (seasons['summer'].includes(month)) return 'summer';
    if (seasons['autumn'].includes(month)) return 'autumn';
  } catch (error) {
    throw new Error(error);
  }
};
