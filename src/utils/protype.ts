Function.prototype.myApply = function (context, args) {
    context = (context === null || context === undefined) ? window : context
    context.__proto__.__this = this
    const ctxSelf = context.__this(...args)
    delete context.__proto__.__this
    return ctxSelf
}

Function.prototype.myCall = function (context, ...args) {
    context = (context === null || context === undefined) ? window : context
    context.__proto__.__this = this
    const ctxSelf = context.__this(...args)
    delete context.__proto__.__this
    return ctxSelf
}

Function.prototype.myBind = function (context, ...args1) {
    const _this = this
    return function (...args2) {
        return _this.myApply(context, [...args1, ...args2])
        // return _this.myCall(context, ...args1, ...args2)
    }
}
