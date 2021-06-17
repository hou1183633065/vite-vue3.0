class Node {
    constructor(v) {
        this.value = v
        this.prev = null
        this.next = null
    }
}

class SingleLinkList {
    constructor() {
        this.size = 0
        this.head = new Node('head')
    }
    isEmpty() {
        return this.size === 0
    }
    checkIndex(index) {
        if (index && index > this.size) throw Error('index on error')
    }
    find(index) {
        let header = this.head
        let currentIndex = 0
        while (currentIndex < index) {
            header = header.next
            currentIndex++
        }
        return header
    }
    getNode(index) {
        return this.find(index)
    }
    insert(index, value) {
        this.checkIndex(index)
        let currentNode = this.find(index)
        let newNode = new Node(value)
        newNode.prev = currentNode
        newNode.next = currentNode.next
        currentNode.next.prev = newNode
        currentNode.next = newNode
        this.size++
    }
    push(...values) {
        let currentNode = this.find(this.size)
        for (let i = 0; i < values.length; i++) {
            let newNode = new Node(values[i])
            newNode.prev = currentNode
            currentNode.next = newNode
            currentNode = newNode
            this.size++
        }
    }
    pop() {
        return this.remove(this.size)
    }
    shift(...values) {
        let currentNode = this.find(0)
        for (let i = 0; i < values.length; i++) {
            let newNode = new Node(values[i])
            newNode.prev = currentNode
            newNode.next = currentNode.next
            if (currentNode.next) currentNode.next.prev = newNode
            currentNode.next = newNode
            currentNode = newNode
            this.size++
        }
    }
    unshift() {
        return this.remove(1)
    }
    remove(index) {
        this.checkIndex(index)
        let currentNode = this.find(index)
        let prev = currentNode.prev
        let next = currentNode.next
        if (prev) prev.next = next
        if (next) next.prev = prev
        this.size--
        free(currentNode)
        return currentNode
    }
    edit(index, value) {
        let currentNode = this.find(index)
        currentNode.value = value
    }
    print() {
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
    free(node) {
        node = null
    }
    clear() { }
}

let single = new SingleLinkList()
single.push(1, 2, 3)
single.shift(7, 8, 9)
single.insert(1, 33)
single.insert(1, 44)
single.insert(1, 55)
single.edit(1, 66)

// single.remove(2)
// single.pop()
// single.unshift()
// console.log(single.getNode(1));
console.log(single.print());
console.log(single);
