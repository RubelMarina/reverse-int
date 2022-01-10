module.exports = function reverse (n) {
  const arr = Math.abs(n).toString().split('');
  const str = +arr.reverse().join('');
  return str;
  }
  

