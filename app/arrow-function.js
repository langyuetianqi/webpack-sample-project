//ES3 ES5

{
    var evens = [1,2,3,4,5];
    var odds = evens.map(function(v){
        return v + 1
    })
    console.log(odds)
}


//ES6

{
    let evens = [1,2,3,4,5];
    let adds = evens.map(v => v + 1);
    console.log(odds)
}



//关键区别 this的绑定 

//ES3,ES5   输出 a+   该函数被谁调用，this指向谁
{
    var factory = function(){
        this.a = 'a';
        this.b = 'b';
        this.c = {
            a:'a+',
            b:function(){
                return this.a
            }
        };
    }
    console.log(new factory().c.b());
}


//ES6  输出 a   箭头函数的this指向：定义时this的指向

{
    var factory = function(){
        this.a = 'a';//factory的this就是new实例的this 就是这个a
        this.b = 'b';
        this.c = {
            a:'a+',
            b:() => {//这里用了箭头函数  b定义时this指向factory的this
                return this.a
            }
        };
    }
    console.log(new factory().c.b())
}