class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.toLowerCase().replaceAll(/[^a-z0-9]/g,"")

        let start = 0
        let end = normalized.length -1

        while (start < end) {
            if (normalized[start] != normalized[end]) {return false}
            start++
            end--
        }
        return true
    }
}
