import { pow } from './mathematics';
let sortArr = Array.apply(null, { length: 40 } as any).map(() => Math.round(Math.random() * 200))

/**
 * 冒泡排序
 * @param list 
 * @param isDescending 是否降序
 */
export function bubbleSort(list: number[], isDescending?: boolean) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - 1 - i; j++) {

            if (list[j] === list[j + 1]) continue

            let temp = list[j + 1]
            if (!isDescending && list[j] > list[j + 1]) {
                list[j + 1] = list[j]
                list[j] = temp
            }
            if (isDescending && list[j] < list[j + 1]) {
                list[j + 1] = list[j]
                list[j] = temp
            }
        }
    }
    return list
}

/**
 * 选择排序
 * i遍历作为比对项
 * j遍历作为查找项，找到最小/大项进行交换位置
 * @param list 
 * @param isDescending 是否降序
 */
export function selectSort(list: number[], isDescending?: boolean) {
    for (let i = 0; i < list.length; i++) {
        let currentIndex = i
        for (let j = i + 1; j < list.length; j++) {
            if (!isDescending && list[currentIndex] > list[j]) {
                currentIndex = j
            }
            if (isDescending && list[currentIndex] < list[j]) {
                currentIndex = j
            }
        }
        let temp = list[i]
        list[i] = list[currentIndex]
        list[currentIndex] = temp
    }
    return list
}

/**
 * 选择排序
 * i， j都为比对项，j遍历时保证i项为最大/小项， 否则i， j交换位置
 * @param list 
 * @param isDescending 是否降序
 */
export function selectSort2(list: number[], isDescending?: boolean) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            let temp = list[i]
            if (!isDescending && list[i] > list[j]) {
                list[i] = list[j]
                list[j] = temp
            }
            if (isDescending && list[i] < list[j]) {
                list[i] = list[j]
                list[j] = temp
            }
        }
    }
    return list
}

/**
 * 快速排序
 * 
 * @param list 
 * @param isDescending 
 * @returns 
 */
export function quickSort(list: number[], isDescending?: boolean): number[] {
    if (list.length <= 1) return list
    let middle = Math.floor(list.length / 2)
    let current = list[middle]
    let left = [], right = []

    for (let i = 0; i < list.length; i++) {
        if (i === middle) continue

        const flag = !isDescending ? list[i] < current : list[i] > current

        if (flag) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }

    return quickSort(left, isDescending).concat([current], quickSort(right, isDescending))
}

/**
 * 计数排序
 * @param list 
 * @returns 
 */
export function countingSort(list: number[]) {
    let len = list.length, sortIndex = 0, listCount: any[] = []
    for (let i = 0; i < len; i++) {
        if (!listCount[list[i]]) {
            listCount[list[i]] = 0
        }
        listCount[list[i]]++
    }
    for (let i = 0; i < listCount.length; i++) {
        if (listCount[i] === undefined) continue
        let count = listCount[i]
        while (count > 0) {
            list[sortIndex++] = i
            count--
        }
    }
    return list
}

/**
 * 桶排序
 * @param list 
 * @returns 
 */
export function bucketSort(list: number[]) {
    let min = Infinity, max = -Infinity
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i]
        }
        if (list[i] > max) {
            max = list[i]
        }
    }
    const bucketSize = 10
    const bucketCount = Math.floor((max - min) / bucketSize) + 1
    console.log(min, max, bucketCount);

    let buckets = new Array(bucketCount)

    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }
    for (let i = 0; i < list.length; i++) {
        buckets[Math.floor((list[i] - min) / bucketSize)].push(list[i])
    }
    list.length = 0
    for (let i = 0; i < buckets.length; i++) {
        selectSort(buckets[i])
        for (let j = 0; j < buckets[i].length; j++) {
            list.push(buckets[i][j])
        }
    }
    return list
}

export function radixSort(list: number[]) {
    const base = 10
    let dev = 1

    let buckets: number[][] = []
    for (let i = 0; i < base; i++) {
        buckets[i] = []
    }
    // console.log(buckets);

    for (let i = 0; i < list.length; i++) {
        dev = String(list[i]).length
        // let ci = Math.floor(list[i] / pow(base, dev))
        // console.log(list[i], list[i] % Math.pow(base, dev));
        console.log(list[i], Math.floor(list[i] / base));

        // buckets[ci].push(list[i])
    }

    // for (let i = 0; i < buckets.length; i++) {
    //     // insertionSort(buckets[i])
    //     console.log(buckets[i]);
    // }


}
export function insertionSort(list: number[], isDescending?: boolean) {
    for (let i = 1; i < list.length; i++) {
        let preIndex = i - 1
        let current = list[i]

        while (!isDescending && preIndex >= 0 && list[preIndex] > current) {
            list[preIndex + 1] = list[preIndex]
            preIndex--
        }
        while (isDescending && preIndex >= 0 && list[preIndex] < current) {
            list[preIndex + 1] = list[preIndex]
            preIndex--
        }
        list[preIndex + 1] = current
    }
}

export function shellSort(list: number[], isDescending?: boolean) {
    // let len = list.length, temp, gap = 1
    // while (gap < len / 3) {
    //     gap = gap * 3 + 1
    // }
    // for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    //     console.log(gap);

    // }
}
export function mergeSort(list: number[], isDescending?: boolean) {

}
console.log(sortArr);



console.log(radixSort(sortArr));


export function bubbleSort2(list: number[], isDescending?: boolean) {
    let x1 = 0, x2 = 1
    while (x1 < list.length && x2 < list.length) {
        console.log(list[x1], list[x2]);

        x1++
        x2++
    }
}
