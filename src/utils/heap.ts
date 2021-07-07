/**
 * 1、堆高度 height=Math.floor(Math.log2(list.length))
 * 2、某层节点数/堆宽度 满二叉树width=Math.pow(2, level) 完全二叉树需要判断是否为最后一层，如果是则宽度为总节点数-当前层之前的节点总数
 * 3、当前层之前的节点总数 befortNodelen=width-1
 * 
 * 当节点为i时
 * 4、子左节点下标 leftIndex=i*2+1
 * 5、子右节点下标 rightIndex=leftIndex+1
 * 6、父节点下标 parentIndex=Math.ceil(i / 2) - 1
 * 7、最后一个
 */
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
    /**判断是不是为满二叉树 */
    get isFullHeap() {
        /**看最后一层是不是满的 */
        return Math.pow(2, this.height) === this.getWidthByLevel(this.height)
    }
    /**获取某一层级的宽度（节点数）level从0开始 */
    getWidthByLevel(level: number) {
        if (level > this.height) throw new Error("超出高度");
        /**每一级满节点数为0, 2, 4, 8 */
        const currentNodelen = Math.pow(2, level)
        if (level < this.height) return currentNodelen
        /**当前层级节点数-1=之前全部层级节点数 */
        const beforeNodelen = currentNodelen - 1
        return this.list.length - beforeNodelen
    }
    /**获取某个节点下标的父节点下标 */
    leafIndexFinal(maxIndex: number) {
        maxIndex = maxIndex >>> 0
        if (maxIndex === 0) throw new Error(`param cannot be equal to 0`);
        return Math.ceil(maxIndex / 2) - 1
    }
    /**
     * 创建最大堆
     * @param list 
     * @param maxIndex 最大节点下标，默认为list.length-1
     */
    createMaxHeap(list: number[], maxIndex?: number) {
        let len = list.length

        if (maxIndex === undefined || maxIndex === null) maxIndex = len - 1
        let beginIndex = this.leafIndexFinal(maxIndex)
        for (let i = beginIndex; i >= 0; i--) {
            this.maxHeapAdjust(list, i, maxIndex)
            // this.adjustToMax(list, i, maxIndex)
        }
    }
    /**
     * 递归节点及子节点调整为符合最大堆特性
     * @param list 
     * @param index 需要调整的当前节点下标
     * @param maxIndex 能调整最大节点下标
     */
    adjustToMax(list: number[], index: number, maxIndex: number) {
        // console.count('adjustToMax');
        /**
         * cli-左子节点下标
         * cri-右子节点下标
         * maxci-最大子节点下标
         */
        let cli = index * 2 + 1
        let cri = cli + 1
        let maxci = cli
        if (cli > maxIndex) return
        if (cri < maxIndex && list[cli] < list[cri]) {
            maxci = cri
        }
        /**当前节点小于最大子节点时，互换位置，并递归执行互换后的子节点 */
        if (list[index] < list[maxci]) {
            let _item = list[index]
            list[index] = list[maxci]
            list[maxci] = _item
            this.adjustToMax(list, maxci, maxIndex)
        }
    }
    /**
     * 循环节及点子节点调整为符合最大堆特性
     * @param list 
     * @param index 需要调整的当前节点下标
     * @param maxIndex 能调整最大节点下标
     */
    maxHeapAdjust(list: number[], index: number, maxIndex: number) {
        let cli = index * 2 + 1
        let cri = cli + 1

        while (cli <= maxIndex) {
            // console.count('maxHeapAdjustCount');
            /**获取最大子节点下标 */
            let maxci = cli
            if (cri < maxIndex && list[cli] < list[cri]) {
                maxci = cri
            }

            let item = list[index]
            /**
             * 当前节点大于最大子节点时跳出执行，否则互换节点；
             * 并更新下轮循环的当前节点下标index及左右子节点下标
             */
            if (item > list[maxci]) break
            list[index] = list[maxci]
            list[maxci] = item

            index = maxci
            cli = maxci * 2 + 1
            cri = cli + 1
        }
    }
    /**
     * 创建最小堆
     * @param list 
     * @param maxIndex 最大节点下标，默认为list.length-1
     */
    createMinHeap(list: number[], maxIndex?: number) {
        let len = list.length
        if (maxIndex === undefined || maxIndex === null) maxIndex = len - 1
        let beginIndex = this.leafIndexFinal(maxIndex)

        for (let i = beginIndex; i >= 0; i--) {
            this.minHeapAdjust(list, i, maxIndex)
            // this.adjustToMin(list, i, maxIndex)
        }
    }
    /**
     * 递归节点及子节点调整为符合最小堆特性
     * @param list 
     * @param index 需要调整的当前节点下标
     * @param maxIndex 能调整最大节点下标
     */
    adjustToMin(list: number[], index: number, maxIndex: number) {
        // console.count('adjustToMin');
        /**
         * cli-左子节点下标
         * cri-右子节点下标
         * minci-最小子节点下标
        */
        let cli = index * 2 + 1
        let cri = cli + 1
        let minci = cli
        if (cli > maxIndex) return
        if (cri < maxIndex && list[cli] > list[cri]) {
            minci = cri
        }
        /**当前节点大于最小子节点时，互换位置，并递归执行互换后的子节点 */
        if (list[index] > list[minci]) {
            let _item = list[index]
            list[index] = list[minci]
            list[minci] = _item
            this.adjustToMin(list, minci, maxIndex)
        }

    }
    /**
     * 循环节及点子节点调整为符合最小堆特性
     * @param list 
     * @param index 需要调整的当前节点下标
     * @param maxIndex 能调整最大节点下标
     */
    minHeapAdjust(list: number[], index: number, maxIndex: number) {
        let cli = index * 2 + 1
        let cri = cli + 1

        while (cli <= maxIndex) {
            // console.count('minHeapAdjustCount');
            /**最小子节点下标 */
            let minci = cli
            if (cri < maxIndex && list[cli] > list[cri]) {
                minci = cri
            }

            let item = list[index]
            /**
             * 当前节点小于最小子节点时跳出执行，否则互换节点；
             * 并更新下轮循环的当前节点下标index及左右子节点下标
             */
            if (item < list[minci]) break
            list[index] = list[minci]
            list[minci] = item

            index = minci
            cli = minci * 2 + 1
            cri = cli + 1
        }
    }
    /**
     * 堆排序， 步骤如下
     * 1、初始化指针lastIndex=list.length - 1
     * 2、将下标从0-lastIndex的数组调整为最大堆或者最小堆
     * 3、将堆的首项与第lastIndex项（0-lastIndex的尾项）互换位置
     * 3、指针lastIndex--递减并执行步骤2
     * 4、当lastIndex=0时，执行完毕
     * （当每次调整为最大堆时得到递增序列）
     * （当每次调整为最小堆时得到递减序列）
     * @param list 
     * @param isToMin 是否降序，默认升序
     */
    sortHeap(list: number[], isToMin?: boolean) {
        let lastIndex = list.length - 1

        while (lastIndex > 0) {
            if (!isToMin) {
                this.createMaxHeap(list, lastIndex)
            } else {
                this.createMinHeap(list, lastIndex)
            }
            let maxItem = list[0]
            list[0] = list[lastIndex]
            list[lastIndex] = maxItem
            lastIndex--
        }
    }
}

let heapArr = [3, 4, 1, 2, 5, 6, 9, 10, 7, 8, 11, 12]
// console.log(heapArr);

let newHeaq = new Heap(heapArr)
// console.log(newHeaq.height);
// console.log(newHeaq.isFullHeap);

// console.log(0, newHeaq.getWidthByLevel(0));
// console.log(1, newHeaq.getWidthByLevel(1));
// console.log(2, newHeaq.getWidthByLevel(2));
// console.log(3, newHeaq.getWidthByLevel(3));

// newHeaq.createMaxHeap(heapArr)
// newHeaq.createMinHeap(heapArr)

// console.log('sortCount', 31);
// console.log('forocunt', 66);

// newHeaq.sortHeap(heapArr, false)
// newHeaq.sortHeap(heapArr, true)

// console.log(newHeaq.getWidthByLevel(0));
// console.log(newHeaq.getWidthByLevel(1));
// console.log(newHeaq.getWidthByLevel(2));
// console.log(newHeaq.getWidthByLevel(3));
// console.log(heapArr);





