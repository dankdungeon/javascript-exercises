const sumAll = function(num1, num2) {
  // need to check if arguments are postive ints
  if ((!Number.isInteger(num1) || num1 < 0) || (!Number.isInteger(num2) || num2 < 0))
    return "ERROR";

  let sum = 0;
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  for (let i = min; i <= max; i++)
    sum += i;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
