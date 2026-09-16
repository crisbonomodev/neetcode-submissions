class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapAnagrams = new Map()

        for (const str of strs) {
            let counter = new Array(26).fill(0)

            for (let i = 0; i < str.length; i++) {
                counter[str.charCodeAt(i)-'a'.charCodeAt(0)]++
            }

            const key = counter.join('#')

            if (!mapAnagrams.has(key)) {
                mapAnagrams.set(key, [])
            }
            mapAnagrams.get(key).push(str)
        }

        return Array.from(mapAnagrams.values())


    }
}
