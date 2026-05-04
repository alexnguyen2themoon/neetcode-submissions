class Solution {
    findMaxConsecutiveOnes(nums) {
        let res = 0,
            cnt = 0;

        for (const num of nums) {
            cnt = num === 1 ? cnt + 1 : 0;
            res = Math.max(res, cnt);
        }
        return res;
    }
}