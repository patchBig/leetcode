//Given an array of integers, return indices of the two numbers such that they a
//dd up to a specific target. 
//
// You may assume that each input would have exactly one solution, and you may n
//ot use the same element twice. 
//
// Example: 
//
// 
//Given nums = [2, 7, 11, 15], target = 9,
//
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].
// 
// Related Topics Array Hash Table 
// 👍 16182 👎 586


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0, j = nums.length; i < j; i++) {
//         for(let k = i + 1; k < j; k++ ) {
//             if (nums[i] + nums[k] === target) {
//                 return [i, k]
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0, j = nums.length; i < j; i++) {
        let remain = target- nums[i];
        if (map.has(remain)) {
            return [i, map.get(remain)]
        }
        map.set(nums[i], i)
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
//leetcode submit region end(Prohibit modification and deletion)
