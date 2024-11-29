const palindromes = function (palindrome) {
  const string = palindrome.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = string.length - 1;
  if (string[end] == ".") end--;

  while (start < end) {
    if (string[start] !== string[end]) return false;
    start++;
    end--;
  }
  return true;
};
/*
we can use two pointers
one pointer at beginning of string
one pointer at end of string
while (start <= end)
if (string[start] != string[end])
  return false
else
  start++
  false--

*/

// Do not edit below this line
module.exports = palindromes;
