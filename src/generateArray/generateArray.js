// generate an array of numbers from 1 to n

const generateArray = n => {
    if (n < 0) {
      return []
    }
    return [...Array(n).keys()].map(i => i + 1);
  };

module.exports = generateArray