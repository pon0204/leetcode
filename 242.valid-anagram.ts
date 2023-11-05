/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const charCount = new Map<string, number>()
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }
  for (const char of t) {
    if (!charCount.has(char)) return false
    const count = charCount.get(char)! - 1
    if (count === 0) {
      charCount.delete(char)
    } else {
      charCount.set(char, count)
    }
  }
  return charCount.size === 0
}

// @lc code=end

/**
 * [実装メモ]
 * anagramがあるかどうかを判定する。
 * anagramとは、文字列の並び順が違うだけで、同じ文字を使っているもの。
 * つまり、各文字列をソートして、同じかどうかを判定すれば良い。
 *
 * [実装追記]
 * 以上の様に判断したが、ソートアルゴリズムは O(n log n) の時間がかかる。
 * なので別解法を考える。
 * 同じ文字が出現する回数で判断すればいい。
 * mapメソッドで文字のkeyと出現回数を作成し、tのループをして、出現回数を減らす。
 */

// 過去の解法
// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false
//   const sortS = s.split('').sort().join('')
//   const sortT = t.split('').sort().join('')
//   return sortS === sortT
// }
