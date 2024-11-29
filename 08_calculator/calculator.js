const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let res = 0;
  for (num of array)
    res += num;

  return res;
};

const multiply = function(array) {
  let res = 1;
  for (num of array)
    res *= num;
  return res;
};

const power = function(num, pow) {
  let res = num
	for (let i = 0; i < pow-1; i++) 
    res *= num;
  return res;
};

const factorial = function(num) {
  // base case
  if (num == 1 || num == 0)
    return 1;
  else
    return num * factorial(num-1);
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
