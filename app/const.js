//ES6 声明常量


//ES5写法

Object.defineProperty(window,"PI2",{
    value:3.1415926,
    writable:false
})

console.log(window.PI2)


//ES6写法
const PI = 3.1415926;

console.log(PI)