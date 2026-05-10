class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 0) return true
        // Normalizar el string - pasa a lowercase, quitar caracteres especiales y espacios
        let normalized = s.replaceAll(/\W/g,"").toLowerCase()
        
        let start = 0
        let end = normalized.length -1

        while (start < end) {
            if (normalized[start] !== normalized[end]) {return false}
            start++
            end--
        }

        return true

    }
}
