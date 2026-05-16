class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // 
        const stack = []
        const mapping = {")":"(","]":"[","}":"{"}

        for (const char of s) {
            if (char in mapping) {
                // this is a closing bracket, let's check if our stack has the right opening bracket
            if (stack.length === 0
                || mapping[char] !== stack[stack.length -1]
            ) {
                return false
            }
            stack.pop()
            } else {
stack.push(char)
            }
            
        }
        return stack.length === 0
    }
}
