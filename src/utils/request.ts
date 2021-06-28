export default class CreateMaxRequest {
    max: number
    runStackes: any[]
    seqStackes: any[]
    constructor(max?: number) {
        this.max = max || 5
        this.runStackes = []
        this.seqStackes = []
    }
    request(req: any) {
        if (this.runStackes.length < 5) {
            let req = this.seqStackes.shift()
            this.runStackes.push(req)
        } else {
            this.seqStackes.push(req)
        }
        this.runStack()
    }
    runStack() {
    }
    callbackFun() {
        // array.forEach(element => {

        // });
    }
}