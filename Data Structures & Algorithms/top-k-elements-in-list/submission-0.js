class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let result = [];
        for(const num of nums){
            if(!map.has(num)){
                map.set(num, 1)
            }else{
                map.set(num,map.get(num)+1)
            }   
        }

        let arr = [...map.entries()];
        arr.sort((a,b) => b[1] - a[1]);

        let results = [];  

        for(let i=0; i<k;i++){
            result.push(arr[i][0]);
        }
        return result;

    }
}
