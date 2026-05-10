class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

  const letters = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    letters[s.charCodeAt(i)-'a'.charCodeAt(0)]++
    letters[t.charCodeAt(i)-'a'.charCodeAt(0)]--
  }

  for (let i = 0; i < letters.length; i++) {
    if (letters[i]!= 0) {return false}
  }
  return true
    }
}
