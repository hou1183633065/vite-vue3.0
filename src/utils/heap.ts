
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
    createHeap(list: number[]) {
        let len = list.length
        let maxIndex = len - 1
        let beginIndex = len / 2 - 1
        for (let i = beginIndex; i >= 0; i--) {
            this.sortHeapMax(list, i, maxIndex)
            // heap[i] = this.list[i]
            // let cli = (2 * i + 1)
            // if (cli < this.list.length) {
            //     heap[cli] = this.list[i + 1]
            // }
            // let cri = (2 * i + 2)
            // if (cri < this.list.length) {
            //     heap[cri] = this.list[i + 2]
            // }
        }
    }
    sortHeapMax(list: number[], index: number, maxIndex: number) {
        // console.log(list, index, maxIndex);
        // let parentIndex = Math.floor(index / 2 - 1)
        let cli = index * 2 + 1
        let cri = index * 2 + 2
        let maxcl = list[cli]
        if (cri < list.length - 1) {
            maxcl = Math.max(list[cli], list[cri])
        }
        // console.log(index, cli, cri);
        if (list[index]>maxcl) {
            
        }
        console.log(list[index], maxcl);
    }
}

let heapArr = [3, 4, 1, 2, 5, 6, 9, 10, 7, 8, 11, 12]

let newHeaqp = new Heap(heapArr)
console.log(newHeaqp.height);
console.log(newHeaqp.isFullHeap);
newHeaqp.createHeap(heapArr)
// newHeaqp.sortHeapMax(heapArr)
// console.log(newHeaqp.getWidthByLevel(0));
// console.log(newHeaqp.getWidthByLevel(1));
// console.log(newHeaqp.getWidthByLevel(2));
// console.log(newHeaqp.getWidthByLevel(3));


