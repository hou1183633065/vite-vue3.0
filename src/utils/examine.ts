/**
 * Object.prototype.toString结合call/apply可检测对象类型，返回[object Object]等
 * @param v 
 * @return String [object Object/Date/String/Null/Undefined/Math]
 */
export const _toString = (v: any): string => Object.prototype.toString.call(v)

/**
 * 转为字符串（所有类型数据）
 * @param v 
 * @return String 
 */
export const toString = (v: any) => (
    isUndef(v) ? '' : (Array.isArray(v) || isObject(v)) ? JSON.stringify(v) : String(v)
)

/**
 * 是否为null
 * @param v 
 * @return Boolean
 */
export const isNull = (v: any): boolean => v === null

/**
 * 是否为null/undefined
 * @param v 
 * @return Boolean
 */
export const isUndef = (v: any): boolean => v === null || v === undefined

/**
 * 是否为非(null/undefined)
 * @param v 
 * @return Boolean
 */
export const isDef = (v: any): boolean => v !== null && v !== undefined

/**
 * 是否为有效基础数据类型
 * @param v 
 * @return Boolean
 */
export const isPrimitive = (v: any): boolean => (
    typeof v === 'number' ||
    typeof v === 'string' ||
    typeof v === 'symbol' ||
    typeof v === 'boolean'
)

/**
 * 是否为true
 * @param v 
 * @return Boolean
 */
export const isTrue = (v: any): boolean => v === true

/**
 * 是否为false
 * @param v 
 * @return Boolean
 */
export const isFalse = (v: any): boolean => v === false

/**
 * 是否为Function
 * @param v 
 * @return Boolean
 */
export const isFunction = (v: any): boolean => isDef(v) && typeof v === 'function'

/**
 * 是否为Promise实例
 * @param v 
 * @return Boolean
 */
export const isPromise = (v: any): boolean => isDef(v) && isFunction(v.then) && isFunction(v.catch)

/**
 * 是否为原生方法（为环境构建提供的API）
 * @param v 
 * @return Boolean
 */
export const isNative = (v: any): boolean => isFunction(v) && /native code/.test(v)

/**
 * 是否为正则
 * @param v 
 * @return Boolean
 */
export const isRegExp = (v: any): boolean => _toString(v) === '[object RegExp]'

/**
 * 是否为字符串
 * @param v 
 * @return Boolean
 */
export const isString = (v: any): boolean => typeof v === 'string'

/**
 * 是否为Symbol
 * @param v 
 * @return Boolean
 */
export const isSymbol = (v: any): boolean => typeof v === 'symbol'

/**
 * 是否为Number
 * @param v 
 * @return Boolean
 */
export const isNumber = (v: any): boolean => typeof v === 'number'

/**
 * 是否为布尔类型
 * @param v 
 * @return Boolean
 */
export const isBoolean = (v: any): boolean => typeof v === 'boolean'

/**
 * 是否为对象
 * @param v 
 * @return Boolean
 */
export const isObject = (v: any): boolean => _toString(v) === '[object Object]';

/**
 * 是否为日期对象
 * @param v 
 * @return Boolean
 */
export const isDate = (v: any): boolean => _toString(v) === '[object Date]';

/**
 * 是否为数值对象
 * @param v 
 * @return Boolean
 */
export const isMath = (v: any): boolean => _toString(v) === '[object Math]';


