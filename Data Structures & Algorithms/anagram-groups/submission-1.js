class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map()

        for (const str of strs) {
            let counter = new Array(26).fill(0)

            for (let i = 0; i< str.length; i++) {
                counter[str.charCodeAt(i)-'a'.charCodeAt(0)]++
            }

            const key = counter.join("#")

            if (!groups.has(key)) {
                groups.set(key,[])
            } 

            groups.get(key).push(str)
        }

        return [...groups.values()]

    }
}
