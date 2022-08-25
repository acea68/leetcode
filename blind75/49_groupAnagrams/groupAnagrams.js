/** Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 10^4
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */
// i: array of strings
// o: array of arrays of anagram strings (grouped together corresponding to confirmed anagrams)
// e: empty str elem, repeating character, single letter

function groupAnagrams(stringsArr) {
  // create helper func checking if two strs are anagrams of each other
    // loop thru str, for each char, make prop and keep count of encounters
  // brute force: loop through strs and checking if each str is anagram of other str
  // note not to repeat strs that have already been checked
  // consider using a map containing maps of strs
  let stringsMap = {}; // { eat: {e:1, a:1, t:1}, tea: {t:1, e:1, a:1}, ...}
  let groupedStrs = [];
  for (let i = 0 ;i < stringsArr.length; i++) {
    for (let j = i; j < stringsArr.length; j++) {
      if (isAnagram(stringsArr[i], stringsArr[j]))
    }
  }
  function mapStr(str) {
    if (!stringsMap[str]) {
      stringsMap[str] = {};
      for (let char of str) {
        if (!stringsMap[str][char]) {
          stringsMap[str][char] = 1;
        } else {
          stringsMap[str][char]++;
        }
      }
    }
  }

}