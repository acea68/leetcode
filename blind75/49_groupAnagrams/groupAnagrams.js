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

const groupAnagrams = strs => {
  const map = {};
  for (let str of strs) {
    const key = [...str].sort();
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
};

// function groupAnagrams(strs) {
//   let map = {};
//   for (let string of strs) {
//     let count = Array(26).fill(0);
//     for (let char of string) {
//       count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }
//     if (!map[count.toString()]) {
//       map[count.toString()] = [string];
//     } else {
//       map[count.toString()].push(string)
//     }
//   }
//   return Object.values(map);
// }

// function groupAnagrams(stringsArr) {
//   // create map of all strings with chars and counts
//   // create helper func checking if two strs are anagrams of each other
//   // loop thru str, for each char, make prop and keep count of encounters
//   // brute force: loop through strs and checking if each str is anagram of other str
//   // note not to repeat strs that have already been checked
//   let stringsMap = {}; // { eat: {e:1, a:1, t:1}, tea: {t:1, e:1, a:1}, ...}
//   let groupedStrs = [];
//   function mapStr(str) {
//     if (!stringsMap[str]) {
//       stringsMap[str] = {};
//       for (let char of str) {
//         if (!stringsMap[str][char]) {
//           stringsMap[str][char] = 1;
//         } else {
//           stringsMap[str][char]++;
//         }
//       }
//       stringsMap[str].isGrouped = false;
//     }
//   }
//   stringsArr.forEach(mapStr);
//   console.log(stringsMap);
//   for (let i = 0; i < stringsArr.length; i++) {
//     let group = [];
//     for (let j = i + 1; j < stringsArr.length; j++) {
//       if (isAnagram(stringsMap[stringsArr[i]], stringsMap[stringsArr[j]])) {
//         if (!group.includes(stringsArr[i]) && !stringsMap[stringsArr[i]].isGrouped) {
//           group.push(stringsArr[i]);
//           stringsMap[stringsArr[i]].isGrouped = true;
//         }
//         if (!group.includes(stringsArr[j]) && !stringsMap[stringsArr[j]].isGrouped) {
//           group.push(stringsArr[j]);
//           stringsMap[stringsArr[i]].isGrouped = true;
//         }
//       }
//       if (!group.length && !stringsMap[stringsArr[i]].isGrouped) group.push(stringsArr[i])
//     }
//     if (group.length) groupedStrs.push(group);
//   }

//   function isAnagram(obj1, obj2) {

//     if (Object.keys(obj1).length === Object.keys(obj2).length) {
//       for (let key in obj1) {
//         if (obj2[key] !== obj1[key]) return false
//       }
//       return true
//     }
//     return false
//   }

//   return groupedStrs;
// }

let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log('🚀 ~ result', result);