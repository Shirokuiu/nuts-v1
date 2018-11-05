// remove spaces from numbers
const removeSpace = function (num) {
  let newNum = num + '';

  return newNum.replace(/\s/g, '');
}

module.exports = removeSpace;