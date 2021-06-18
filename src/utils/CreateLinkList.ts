class CreateNode {
    value: any
    prev: any
    next: any
    constructor(v: any) {
        this.value = v
        this.prev = null
        this.next = null
    }
}

class SingleLinkList {
    size: number
    head: CreateNode
    constructor() {
        this.size = 0
        this.head = new CreateNode('head')
    }
    isEmpty() {
        return this.size === 0
    }
    checkIndex(index: number) {
        if (index && index > this.size) throw Error('index on error')
    }
    find(index: number): CreateNode {
        let header = this.head
        let currentIndex = 0
        while (currentIndex < index) {
            header = header.next
            currentIndex++
        }
        return header
    }
    getNode(index: number): CreateNode {
        return this.find(index)
    }
    insert(index: number, value: any): void {
        this.checkIndex(index)
        let currentNode = this.find(index)
        let newNode = new CreateNode(value)
        newNode.prev = currentNode
        newNode.next = currentNode.next
        currentNode.next.prev = newNode
        currentNode.next = newNode
        this.size++
    }
    push(...values: any[]): void {
        let currentNode = this.find(this.size)
        for (let i = 0; i < values.length; i++) {
            let newNode = new CreateNode(values[i])
            newNode.prev = currentNode
            currentNode.next = newNode
            currentNode = newNode
            this.size++
        }
    }
    pop(): CreateNode {
        return this.remove(this.size)
    }
    shift(...values: any[]): void {
        let currentNode = this.find(0)
        for (let i = 0; i < values.length; i++) {
            let newNode = new CreateNode(values[i])
            newNode.prev = currentNode
            newNode.next = currentNode.next
            if (currentNode.next) currentNode.next.prev = newNode
            currentNode.next = newNode
            currentNode = newNode
            this.size++
        }
    }
    unshift(): CreateNode {
        return this.remove(1)
    }
    remove(index: number): CreateNode {
        this.checkIndex(index)
        let currentNode = this.find(index)
        let prev = currentNode.prev
        let next = currentNode.next
        if (prev) prev.next = next
        if (next) next.prev = prev
        this.size--
        this.free(currentNode)
        return currentNode
    }
    edit(index: number, value: number): void {
        let currentNode = this.find(index)
        currentNode.value = value
    }
    print(): Array<CreateNode> {
        let list = []
        let header = this.head
        console.log('----print---');
        while (header) {
            console.log(header);
            list.push(header)
            header = header.next
        }
        console.log('----print---');
        return list
    }
    free(node: any) {
        node = null
    }
    clear() { }
}

// let single = new SingleLinkList()
// single.push(1, 2, 3)
// single.shift(7, 8, 9)
// single.insert(1, 33)
// single.insert(1, 44)
// single.insert(1, 55)
// single.edit(1, 66)

// // single.remove(2)
// // single.pop()
// // single.unshift()
// // console.log(single.getNode(1));
// console.log(single.print());
// console.log(single);
