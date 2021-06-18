/** 算法集合 */

import { isUndef } from "./examine"

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

export function addToNumbers(l1: number[], l2: number[]) {
    let len = l1.length > l2.length ? l1.length : l2.length
    let list: number[] = []
    for (let i = 0; i < len; i++) {
        if (isUndef(list[i])) list[i] = 0

        let result = list[i] + (l1[i] || 0) + (l2[i] || 0)
        if (result < 10) {
            list[i] = result
        } else {
            list[i] = result - 10
            if (isUndef(list[i + 1])) list[i + 1] = 0
            list[i + 1] += 1
        }
    }
    return list
}


export function lengthOfLongestSubstring(s: string) {
    let newMap = new Map()
    let max = 0
    let x = 0
    for (let i = 0; i < s.length; i++) {
        let ele = s.charAt(i)
        if (newMap.has(ele)) {
            x = Math.max(newMap.get(ele) + 1, x)
        }
        max = Math.max(max, i - x + 1)
        newMap.set(ele, i)
    }
    return max
}

/**
 * 两个有序数组寻找合并后的中位数
 * @param nums1 
 * @param nums2 
 * @returns 
 * @example
 * nums1 = [1, 3], nums2 = [2] =>> 2
 * nums1 = [1, 3], nums2 = [3, 4] =>> 2.5
 * nums1 = [3], nums2 = [-1, -2] =>> -1
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]) {
    let list = nums1.concat(nums2).sort((a, b) => a - b)
    let median = Math.floor(list.length / 2)

    if (list.length % 2 === 1) return list[median]

    return (list[median - 1] + list[median]) / 2
}


export function reverseNumber(x: number): number {
    console.log(x.toString(2));

    let flag = x < 0 ? -1 : 1
    let list = Math.abs(x).toString().split('')

    return flag * Number(list.reverse().join(''))
}