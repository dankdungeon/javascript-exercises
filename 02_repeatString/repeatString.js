const repeatString = function(string, num) {
  let res = '';

  if (num < 0)
    return "ERROR";
  for (let i = 0; i < num; i++) {
    if (i == 0)
      res = string;
    else
      res += string;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
