class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // usamos un set para validar si tenemos un caracter en el string
        const seen = new Set()

        // vamos a recorrer el string mediante punteros
        let start = 0;
        let end = 0;
        let max = 0;

        while (end < s.length) {
            // si el set no tiene el caracter, lo agregamos y movemos end agrandando la ventana
            if (!seen.has(s[end])) {
                seen.add(s[end])
                max = Math.max(max, end - start + 1)
                end++
            } else {
                // si el set tiene el caracter, movemos start achicando la ventana
                seen.delete(s[start])
                start++
            }
        }
        return max
    }
}