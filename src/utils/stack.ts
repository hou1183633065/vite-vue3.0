import { isFunction } from './examine';
export default class Stack {
    protected stacks: any[]

    constructor() {
        this.stacks = []
    }

    get length() {
        return this.stacks.length
    }

    get isEmpty() {
        return this.length === 0
    }

    push(ctx: any) {
        this.stacks.unshift(ctx)
    }

    pop() {

        return this.stacks.shift()
    }

    getItem(index: number) {
        return this.stacks[index]
    }

    clear() {
        this.stacks = []
    }

}


let newStack = new Stack()
newStack.push(() => {
    console.log(1);
})
newStack.push(() => {
    console.log(2);
})
newStack.push(() => {
    console.log(3);
})
while (newStack.length > 0) {
    let cb = newStack.pop()
    isFunction(cb) && cb()
}

console.log(newStack);
