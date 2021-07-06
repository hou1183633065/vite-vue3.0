
class Heap {
    list: number[];
    heap: number[];
    heapMax: number[];
    heapMin: number[];

    constructor(list: number[]) {
        this.list = list
        this.heap = []
        this.heapMax = list
        this.heapMin = list
    }
    /**获取堆的高度 */
    get height() {
        return Math.floor(Math.log2(this.list.length))
    }
    /**获取堆的总层数 */
    get levelTotal() {
        return this.height + 1
    }
    /**判断是不是为满二叉树 */
    get isFullHeap() {
        return Math.pow(2, this.levelTotal) - 1 === this.list.length
    }
    getWidthByLevel(level: number) {
        let currentNodelen = Math.pow(2, level)

        if (this.isFullHeap) {
            return currentNodelen
        }
        let beforeNodelen = currentNodelen - 1
        return this.list.length - beforeNodelen
    }
    get getCNodelen() {
        return this.getWidthByLevel(this.height)
    }
    createMaxHeap(list: number[], maxIndex?: number) {
        let len = list.length
        if (maxIndex === undefined || maxIndex === null) maxIndex = len - 1
        let beginIndex = Math.floor(len / 2) - 1
        for (let i = beginIndex; i >= 0; i--) {
            this.maxHeapAdjust(list, i, maxIndex)
            // this.adjustToMax(list, i, maxIndex)
        }
    }
    sortMaxHeap(list: number[]) {
        for (let i = list.length - 1; i > 0; i--) {
            this.createMinHeap(list, i)
            let maxItem = list[0]
            list[0] = list[i]
            list[i] = maxItem
        }
        console.log(list);
    }
    adjustToMax(list: number[], index: number, len: number) {
        console.count('adjustToMax');

        let cli = index * 2 + 1
        let cri = cli + 1
        let maxci = cli
        if (cli > len) return
        if (cri < len && list[cli] < list[cri]) {
            maxci = cri
        }
        if (list[index] < list[maxci]) {
            let _item = list[index]
            list[index] = list[maxci]
            list[maxci] = _item
            this.adjustToMax(list, maxci, len)
        }

    }
    maxHeapAdjust(list: number[], index: number, len: number) {
        let cli = index * 2 + 1
        let cri = cli + 1

        while (cli <= len) {
            console.count('maxHeapAdjustCount');

            let maxci = cli
            if (cri < len && list[cli] < list[cri]) {
                maxci = cri
            }

            let item = list[index]
            if (item > list[maxci]) break
            list[index] = list[maxci]
            list[maxci] = item

            index = maxci
            cli = maxci * 2 + 1
            cri = cli + 1
        }
    }
    createMinHeap(list: number[], maxIndex?: number) {
        let len = list.length
        if (maxIndex === undefined || maxIndex === null) maxIndex = len - 1
        let beginIndex = len / 2 - 1
        for (let i = beginIndex; i >= 0; i--) {
            this.minHeapAdjust(list, i, maxIndex)
            // this.adjustToMin(list, i, maxIndex)
        }
    }
    adjustToMin(list: number[], index: number, len: number) {
        // console.count('adjustToMin');

        let cli = index * 2 + 1
        let cri = cli + 1
        let minci = cli
        if (cli > len) return
        if (cri < len && list[cli] > list[cri]) {
            minci = cri
        }
        if (list[index] > list[minci]) {
            let _item = list[index]
            list[index] = list[minci]
            list[minci] = _item
            this.adjustToMin(list, minci, len)
        }

    }
    minHeapAdjust(list: number[], index: number, len: number) {
        let cli = index * 2 + 1
        let cri = cli + 1

        while (cli <= len) {
            console.count('minHeapAdjustCount');
            let minci = cli
            if (cri < len && list[cli] > list[cri]) {
                minci = cri
            }

            let item = list[index]
            if (item < list[minci]) break
            list[index] = list[minci]
            list[minci] = item

            index = minci
            cli = minci * 2 + 1
            cri = cli + 1
        }
    }
    sortHeap(list: number[], isToMin?: boolean) {

        for (let i = list.length - 1; i > 0; i--) {
            if (!isToMin) {
                this.createMaxHeap(list, i)
            } else {
                this.createMinHeap(list, i)
            }
            let maxItem = list[0]
            list[0] = list[i]
            list[i] = maxItem
        }
        console.log(list);
    }
}

let heapArr = [3, 4, 1, 2, 5, 6, 9, 10, 7, 8, 11, 12]

let newHeaqp = new Heap(heapArr)
// console.log(newHeaqp.height);
// console.log(newHeaqp.isFullHeap);
// newHeaqp.createMaxHeap(heapArr)
// console.log('sortCount', 31);
// console.log('forocunt', 66);

// newHeaqp.sortHeap(heapArr, false)
// newHeaqp.sortHeap(heapArr, true)

// newHeaqp.createMinHeap(heapArr)
// newHeaqp.sortHeapMax(heapArr)
// console.log(newHeaqp.getWidthByLevel(0));
// console.log(newHeaqp.getWidthByLevel(1));
// console.log(newHeaqp.getWidthByLevel(2));
// console.log(newHeaqp.getWidthByLevel(3));


