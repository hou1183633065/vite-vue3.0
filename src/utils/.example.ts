import {
    stoneGame,
    twoSum,
    addToNumbers,
    lengthOfLongestSubstring,
    findMedianSortedArrays,
    reverseNumber
} from './algorithm';

let list1 = [5, 3, 4, 5]

// console.log(stoneGame(list1));

let list2 = [2, 7, 11, 15], target = 9
// let list2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], target = 9

// console.log(twoSum(list2, target));

// let l1 = [2, 4, 3], l2 = [5, 6, 4]
// let l3 = [0], l4 = [0]
// let l5 = [9, 9, 9, 9, 9, 9, 9], l6 = [9, 9, 9, 9]

// console.log(addToNumbers(l1, l2));

// console.log(addToNumbers(l3, l4));
// console.log(addToNumbers(l5, l6));

// let s1 = 'dvdf'
let s1 = 'abcabcbb'
// let s1 = 'pwwkew'

// lengthOfLongestSubstring(s1)

// let nums1 = [1, 3], nums2 = [2]
// let nums1 = [1, 2], nums2 = [3, 4]
// let nums1 = [2], nums2: number[] = []
let nums1 = [3], nums2 = [-2, -1]

console.log(findMedianSortedArrays(nums1, nums2));

console.log(reverseNumber(123));
console.log(reverseNumber(321));

