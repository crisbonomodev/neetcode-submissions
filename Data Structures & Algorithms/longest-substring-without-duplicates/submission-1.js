class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set()

        let start = 0
        let end = 0
        let max = 0

        while (end < s.length) {
            while (seen.has(s[end])) {
                seen.delete(s[start])
                start++
            }
            seen.add(s[end])
            max = Math.max(max, end - start + 1)
            end++
        }
        return max
    }
}
