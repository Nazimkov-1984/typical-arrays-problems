
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0){
    return 0;
  } else {
    return Math.min(...array);
  }
}

exports.max = function max (array) {
  if (arguments.length === 0 ||array.length === 0){
    return 0;
  } else {
    return Math.max(...array);
  }
}


exports.avg = function avg (array) {
  let m = 0;
  let result = 0;
  if (arguments.length === 0 || array.length === 0){
    return 0;
  } else { m = array.reduce((a,b) => a+b, 0); result = m / array.length;}
  return result;
}
