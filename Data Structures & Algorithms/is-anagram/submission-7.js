class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

  const letters = new Map()

  for (let i = 0; i < s.length; i++) {
    letters.set(s[i], (letters.get(s[i])?? 0) +1)
    letters.set(t[i], (letters.get(t[i])?? 0) -1)
  }

  for (const [key,value] of letters) {
    if (letters.get(key) != 0) {
      return false
    }
  }
  return true
    }
}
