// add spaces from numbers
const addSpace = function (num) {
  let newNum = num + '';

  return newNum.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

module.exports = addSpace;