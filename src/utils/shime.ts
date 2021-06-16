import { isObject } from "./examine";

export function arrayClone(arr: Array<any>): Array<any> {
    return arr.map(deepClone)
}

export function objectClone(obj: any): object {
    let result: any = {}
    Object.keys(obj).forEach((key: string) => {
        result[key] = deepClone(obj[key])
    })
    return result
}

export function deepClone(params: any): any {
    if (isObject(params)) {
        return objectClone(<object>params)
    } else if (Array.isArray(params)) {
        return arrayClone(<Array<any>>params)
    } else return params
}