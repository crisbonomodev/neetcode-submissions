class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.replaceAll(/\W/g,"").toLowerCase()

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
