import { isFunction } from './examine';
const PENDING = "pending";
const RESOLVED = "fullFilled";
const REJECTED = "rejected";

class MyPromise {
    status: string;
    value: any;
    reason: any;
    onReslovedCallbacks: Array<Function>;
    onRejectedCallbacks: Array<Function>;
    constructor(executor: (_resolve: Function, _reject: Function) => void) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onReslovedCallbacks = []
        this.onRejectedCallbacks = []
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    resolve = (value: any) => {
        if (this.status !== PENDING) return
        this.status = RESOLVED
        this.value = value
        this.onReslovedCallbacks.forEach(fn => fn(this.value))
    }
    reject = (value: any) => {
        if (this.status !== PENDING) return
        this.status = REJECTED
        this.reason = value
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
    }
    then = (successCallback?: any, failCallback?: any) => {

        // successCallback = successCallback ? successCallback : (value: any) => value
        // failCallback = failCallback ? failCallback : (reason: any) => reason
        // console.log(successCallback);
        // console.log(failCallback);

        if (isFunction(successCallback)) {
            this.onReslovedCallbacks.push(successCallback)
        }
        if (isFunction(failCallback)) {
            this.onRejectedCallbacks.push(failCallback)
        }
        console.log(this.onReslovedCallbacks);
        console.log(this.onRejectedCallbacks);
        
        return this
    }
    catch = (failCallback?: Function) => {
        return this.then(undefined, failCallback)
    }
}
export default MyPromise