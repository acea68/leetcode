/* 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters. */
// i: string with chars, symbols & spaces
// o: boolean (palindrome?) without symbols or spaces
// c: lowercase only
// e: empty string, symbols only, spaces only, repeated char, one char
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // create map of valid chars by hand (lowercase alphabet)
  // or create arr of 26 zeros representing each char in lowercase Am eng alfa
  // loop thru s, increase count of each index when encountered
  // loop thru half arr:
  // entry should be even, 0, or (only 1 instance of an) odd
  // loop thru half arr:
  // use two pointers, one front, one back
  // each entry should match
  // if s.length = odd, middle char should only have one instance
  let charSet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9'])
  let string = '';
  let ind = 0;
  s = s.toLowerCase();
  while (ind < s.length) {
    if (charSet.has(s[ind])) {
      string += s[ind];
    }
    ind++;
  }
  if (!string.length) return true;
  let left = 0;
  let right = string.length - 1;
  for (let i = 0; i <= Math.floor(string.length / 2); i++) {
    if (string[left] !== string[right]) return false
    left++;
    right--;
  }
  return true
};

var result, s;
// s = "A man, a plan, a canal: Panama"; // true
// s = "race a car"; // false
// s = ' '; // true
s = '0P'; // false
result = isPalindrome(s);
console.log('🚀 ~ result', result);
