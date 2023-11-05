/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const sortS = s.split('').sort().join('')
  const sortT = t.split('').sort().join('')
  return sortS === sortT
}
// @lc code=end

/**
 * [実装メモ]
 * anagramがあるかどうかを判定する。
 * anagramとは、文字列の並び順が違うだけで、同じ文字を使っているもの。
 * つまり、各文字列をソートして、同じかどうかを判定すれば良い。
 */
