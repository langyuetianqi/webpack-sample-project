//默认参数对比

{
    //ES3/ES5 默认参数写法
    function f(x,y,z){
        if(y===undefined){//所有参数都判断一遍 很麻烦
            y=7;
        }
        if(z===undefined){
            z=42;
        }
        return x+y+z;
    }
    console.log(f(1,3))
}


//ES6 默认参数
{
    function f(x,y = 7,z = 42){
        return x +y +z;
    }
    console.log(f(1,3))
}



//函数必须按参数校验
{
    function checkParameter(){
        throw new Error('can\'t be empty')
    }
    function f(x = checkParameter(),y = 7,z = 42){
        return x + y + z;
    }
    console.log(f(1));
    
    //没传x，会抛出异常
    try{
        f()
    }catch(e){
        console.log(e);
    }finally{

    }
}


//可变参数的处理

{
    //ES3,ES5 可变参数：函数内传参个数不确定
    function f(){
        //arguments空数组指向入参数组
        var a = Array.prototype.slice.call(arguments);
        var sum = 0;
        a.forEach(function(item){
            sum += item * 1;
        })
        return sum
    }
    console.log(f(1,2,3,6))
}


{
    //ES6 可变参数  使用扩展运算符
    function f(...a){
        var sum = 0;
        a.forEach(item =>{
            sum += item*1
        })
        return sum
    }
    console.log(f(1,2,3,6))
}



//扩展运算符 用法

//ES5 合并数组
{
    var params = ['hello',true,7];
    var other = [1,2].concat(params);
    console.log(other);
}

{
    //ES6 利用扩展运算符 合并数组
    var params = ['hello',true,7];
    var other = [
        1,2,...params
    ]
    console.log(other);
}