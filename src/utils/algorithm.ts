/** 算法集合 */

export function listGetChildrenByTarget(list: Array<number>, target: number): any {
    let result = []
    for (let i = 0; i < list.length; i++) {
        let j = +1
        while (j < list.length) {
            j++
        }
    }
}

/**
 * 偶数长度的整数数组堆中，两人轮流从堆前或后边选择一个值，返回A是否会赢
 * @param piles 
 * @returns 
 */
export function stoneGame(piles: Array<number>): boolean {
    let sum1 = 0, sum2 = 0, i = 0, j = piles.length - 1
    while (i < j) {
        if (piles[i] > piles[j]) {
            sum1 += piles[i]
            sum2 += piles[j]
        } else {
            sum1 += piles[j]
            sum2 += piles[i]
        }
        i++
        j--
    }
    return sum1 > sum2
}

/**
 * 在整数数组中，找出合为target的两个整数，并返回所对应的下标（只会存在一个唯一答案）
 * @param nums 整数数组
 * @param target 目标值
 * @returns 
 */
export function twoSum(nums: Array<number>, target: number) {
    let listMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (listMap.has(target - nums[i])) {
            return [listMap.get(target - nums[i]), i]
        } else {
            listMap.set(nums[i], i)
        }
    }
}