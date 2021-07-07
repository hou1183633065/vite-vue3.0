import { isNumber } from './examine';
/**
 * 阶乘
 * @param num 
 */
export function factorial(num: number): number {
    if (num === 0) return 0
    if (num === 1) return 1
    return num * factorial(num - 1)
}

/**
 * 自然数求和（m到n的自然数）
 * @param m 
 * @param n 
 */
export function naturalSn(m: number, n: number): number {
    m = m || 0
    n = n || 0
    return (m + n) * (n - m + 1) / 2
}

/**
 * 等差数列第n项公差
 * @param a1 首项
 * @param d 公差
 * @param n 第n项
 * @return number
 * @example gradeAn(1, 2, 4)
 */
export function gradeAn(a1: number, d: number, n: number): number {
    // if (d === 0) throw new Error(`d cannot be equal to 0`);

    return a1 + (n - 1) * d
}
// 1, 3, 5, 7
// console.log(gradeAn(1, 2, 3));

/**
 * 等差数列求和
 * @param a1 首项
 * @param d 公差
 * @param n 前n项
 * @return number
 * @example gradeSn(1, 2, 4)
 */
export function gradeSn(a1: number, d: number, n: number): number {
    return n * (a1 + gradeAn(a1, d, n)) / 2
}

/**
 * 求x的y次幂
 * @param x 
 * @param y 
 * @returns number
 * @example pow(2, 4)
 */
export function pow(x: number, y: number): number {
    if (!isNumber(x)) throw new Error(`x must be a number`);
    if (isNaN(x)) throw new Error(`x cannot be equal to NaN`);
    if (x === 0) throw new Error(`x cannot be equal to 0`);

    if (y === 0) return 1
    if (x === 1) return 1
    return x * pow(x, --y)
}

