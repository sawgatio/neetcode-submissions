class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ans = [];
        let map = new Map();

        for(let i=0; i<nums.length;i++){
            if(map.has(target-nums[i])){
                ans.push(i);
                ans.push(map.get(target-nums[i]))
            }else{
                map.set(nums[i],i)
            }
        }
        return ans;
    }
}
