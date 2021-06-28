import {
    stoneGame,
    twoSum,
    addToNumbers,
    lengthOfLongestSubstring,
    findMedianSortedArrays,
    reverseNumber,
    findNumberIn2DArray,
    setTimeoutRun,
    binarySearch,
    longestCommonPrefix
} from './algorithm';
import './CreateLinkList'
import './heap'
// import './stack'
// import './queue'
import CreateMaxRequest from './request';


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

// console.log(findMedianSortedArrays(nums1, nums2));

// console.log(reverseNumber(123));
// console.log(reverseNumber(321));
// 3, 5, 7, 9
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
    [19, 22, 24, 27, 31],
    [20, 23, 25, 28, 32],
    [21, 24, 26, 29, 33],
]

// console.log(findNumberIn2DArray(matrix, 25));

// let list1w = Array.apply(null, { length: 100 }).map((item, index) => index)

// setTimeoutRun(list1w)

// console.log(binarySearch(list1w, 5));


// let strs = ['flower', 'flow', 'flight']
// let strs = ['a']
let strs = ['abab', 'aba', 'abc']

// console.log(longestCommonPrefix(strs));

let newObj: any = {}
function onResolve() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                code: 200,
                msg: '成功'
            })
        }, 1000);
    })
}
function queueRequest(api: string, fun?: Function) {

    if (!newObj[api]) {
        newObj[api] = [fun]
        getApi1((result: any) => {
            let cbs = newObj[api]
            cbs.forEach((cb: Function) => {
                cb && cb(result)
            });
            delete newObj[api]
        })
    } else {
        newObj[api].push(fun)
    }
}

function getApi1(cb: Function) {
    onResolve().then((result: any) => {
        console.count('getApi1执行次数');
        cb(result)
    })
}

function init() {
    // getApi1((result: any) => {
    //     console.log(1, result);
    // })
    // getApi1((result: any) => {
    //     console.log(2, result);
    // })
    // getApi1((result: any) => {
    //     console.log(3, result);
    // })
    queueRequest('getApi1', (result: any) => {
        console.log(1, result);
    })
    queueRequest('getApi1', (result: any) => {
        console.log(2, result);
    })
    queueRequest('getApi1', (result: any) => {
        console.log(3, result);
    })
}

// init()


let listReq = Array.apply(null, { length: 20 }).map((item, index) => {
    return {
        reqIndex: index,
        callback: () => {

        }
    }
})
/** 同时最大5个请求， 请求完成一个，再请求下一个 */

// function apiRequest(...args: any[]) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 1000, ...args);
//     })
// }
// let newMaxReq = new CreateMaxRequest(5)

// listReq.forEach(eleReq => {
//     newMaxReq.request(eleReq)
// });

// console.log(listReq);

