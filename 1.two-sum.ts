/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) return [map.get(complement)!, i]
    map.set(nums[i], i)
  }
  return []
}
// @lc code=end

/**
 * [実装メモ]
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * mapを作成する。
 * target - nums[i]がmapにあるのかを検索する。
 * 存在する場合は、該当の数値のindexと現在indexを返す
 * 存在しない場合は、mapにセットする
 *
 */
