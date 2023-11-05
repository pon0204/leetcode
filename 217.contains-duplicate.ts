/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums)
  return set.size !== nums.length
}
// @lc code=end
