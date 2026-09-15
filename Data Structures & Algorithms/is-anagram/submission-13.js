class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {return false}
        const charCounter = new Array(26).fill(0)
 
        for (let i = 0; i< s.length; i++) {
        charCounter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        charCounter[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
        }

        for (const char of charCounter) {
            if (char != 0) {return false}
        }

        return true

    }
}
