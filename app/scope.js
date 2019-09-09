//ES6作用域

//ES5中的作用域
var callbacks = [];
for(var i = 0; i <= 2 ; i++){
    callbacks[i] = function(){
        return i * 2
    }
}

console.table([
    callbacks[0](),
    callbacks[1](),
    callbacks[2]()
])



//ES6中的作用域
const callbacks2 = [];
for(let j = 0; j <= 2; j++){
    callbacks2[j] = function(){
        return j * 2
    }
}

console.table([
    callbacks2[0](),
    callbacks2[1](),
    callbacks2[2]()
]);



//ES5 块作用域  通过匿名函数，保证作用域，输出都为true

(function(){
    var foo = function(){
        return 1
    }
    console.log(foo() === 1);

    (function(){
        var foo = function(){
            return 2
        }
        console.log(foo() === 2)
    })()
})()


//ES6   { } 指定了作用域
{
    function foo(){
        return 1
    }
    console.log(foo() === 1)
    {
     function foo(){
         return 2
     }   
     console.log(foo() === 2)
    }
    console.log(foo() === 1)
}






