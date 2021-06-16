interface Function {
    myApply: (context: any, args: any) => any;
    myCall: (context: any, ...args: any) => any;
    myBind: (context: any, ...args1: any) => (...args2: any) => any;
}