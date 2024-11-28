const removeFromArray = function(array, ...nums) {
  return array.filter(element => !nums.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
