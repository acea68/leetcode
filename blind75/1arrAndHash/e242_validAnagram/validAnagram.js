/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case? */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// edge: two single letters, repeated letters

function isAnagram(s,t) {
 return s.split('').sort().join('') === t.split('').sort().join('');
}

// var isAnagram = function (s, t) {
//   if (!s.length || !t.length || s.length !== t.length) return false;
//   // loop thru each string and create maps
//   // for each property, compare counts
//   // return true if all props and corresponding counts match
//   // return false otherwise
//   let mapS = {};
//   let mapT = {};
//   for (let char of s) {
//     if (!mapS[char]) mapS[char] = 1;
//     else mapS[char]++;
//   }
//   for (let char of t) {
//     if (!mapT[char]) mapT[char] = 1;
//     else mapT[char]++;
//   }
//   if (Object.values(mapS).length !== Object.values(mapT).length) return false
//   for (let key in mapS) {
//     if (mapS[key] !== mapT[key]) return false
//   }
//   return true;
// };

var s, t;
s = 'anagram';
t = 'nagaram';
// s = '';
// t = '';
let result = isAnagram(s,t);
console.log('🚀 ~ result', result);