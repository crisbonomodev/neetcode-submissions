class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlnum = (c) => /[a-z0-9]/i.test(c)
         let start = 0
        let end = s.length - 1

        while (start < end) {
            if (!isAlnum(s[start])) {start++; continue}
            if (!isAlnum(s[end])) {end--; continue}
            if (s[start].toLowerCase() !== s[end].toLowerCase()) {return false}
            start++
            end--
        }
        return true
    }
}
