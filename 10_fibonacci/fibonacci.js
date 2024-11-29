const fibonacci = function(input) {
  // check for error
  if (input < 0) return "OOPS";
  else if (input == 0) return 0;
  else if (input == 1) return 1;

  return fibonacci(input-1) + fibonacci(input-2);
};

// Do not edit below this line
module.exports = fibonacci;
