/* 271. Encode and Decode Strings
Medium

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).

Example 1:

Input: dummy_input = ["Hello","World"]
Output: ["Hello","World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Example 2:

Input: dummy_input = [""]
Output: [""]

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] contains any possible characters out of 256 valid ASCII characters.

Follow up: Could you write a generalized algorithm to work on any possible set of characters? */
// i: array of string elements & encoded message
// o: encoded message & array of strings
// e: empty array, array of empty strings, str elem = 1 char, str elem = repeated char (same encoded result?)
// c: account for all ascii chars (symbols, upper & lower, numebrs, etc.)
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  return strs.join('###000');
};

// var encode = function (strs) {
//   // create global map of all 256 chars

//   // use number (integer) as key, char itself is the value with String.charCodeAt(0)
//   // create encodedMsg array
//   // loop each str elem, loop each str elem char (nested loop -> O(n^2) time
//   // push String.charCodeAt(0) + ',' into encodedMsg (escape last comma)
//   // return encodedMsg
//   let encodedArr = '';
//   for (let i = 0; i < strs.length; i++) {
//     encodedArr += strs[i].length + '#' + strs[i];
//   }
//   return encodedArr;
// };

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  return s.split('###000')
};

// var decode = function (s) {
//   // split s array at ','
//   // note double ',,' (escape separator)
//   // for each elem (consits of str of puts digit chars)
//     // parseInt
//     // convert to non-ASCII form
//     // push to subarr
//     // while elems are in between a set of sq brakets,
//     // keep pushing chars into sub arr
//     // when braket encountered, push subarr into results arr
//     // note square braket symbol vs. a subarray
//   let strs = [];
//   for (let i = 0; i < s.length; i++) {
//     let currStr = '';
//     let strLen = '';
//     let j = i;
//     while (Number.isInteger(parseInt(s[j]))) {
//       strLen += s[j];
//       j++;
//     }
//     strLen = Number.parseInt(strLen);
//     i = i + j;
//     let counter = 0;
//     while(counter <= strLen) {
//       currStr += s[i];
//       counter++;
//     }
//     strs.push(currStr);
//   }
//   return strs;
// };


// var encode = function(strs) {
//   return strs.join(String.fromCharCode(257));
// };

// var decode = function(s) {
//   return s.split(String.fromCharCode(257));
// };
/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
var result, strs;
strs = ["Hello","World"];
result = decode(encode(strs));
console.log('🚀 ~ result', result);