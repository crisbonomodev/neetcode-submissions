class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (const str of strs) {
            let length = str.length
            result+=("#"+length+"#"+str)
        } 
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let start = 0
        

        let result = []

        while (start < str.length) {
            let end = start + 1

            while (str[end] !== "#" ) {
                end++
            }
            

            // Obtenemos la longitud del string
            // start = 0
            // end = 2
            // deberia ser 5 para la primera
            let length = Number(str.slice(start+1,end))

            let wordStart = end + 1
            let wordEnd = wordStart + length

            // obtenemos la palabra partiendo desde start a la longitud

            let word = str.slice(wordStart, wordEnd)

            // agregamos la palabra al listado

            result.push(word)

            // al final, seteamos start en la posicion del delimitador
            start = wordEnd
        }
        return result
    }
}
