class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // store the groups somewhere
        const result = new Map()

        // then we need to iterate through the strings array

        for (const str of strs) {
        // for each string, we are going to set up an array with its characters count
                const counter = new Array(26).fill(0)

            for (let i = 0; i < str.length ; i++) {
                counter[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }

            const key = counter.join("#")
            // if it doesnt have the key, we initialize it
            if (!result.has(key)) {
              result.set(key,[])  
            }
            //we add the string
            result.get(key).push(str)
        }
        return [...result.values()]
    }
}
