class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = []

        for (const str of strs) {
            result.push(`#${str.length}#${str}`)
        }
        return result.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let start = 0
        let result = []
        
        // Recorremos todo el string
        // "#2#ab"
        while (start < str.length) {
            // Primero, delimitamos el numero
            let end = start + 1

            while (str[end] !== "#") {
                end++
            }

            // Aca ya tenemos nuestro numero delimitado, lo extraemos

            let wordLength = Number(str.slice(start+1, end))

            // Luego, delimitamos la palabra

            let wordStart = end + 1
            let wordEnd = wordStart + wordLength

            let word = str.slice(wordStart, wordEnd)

            result.push(word)

            //movemos el puntero al proximo delimitador
            start = wordEnd

        }
        return result
    }
}
