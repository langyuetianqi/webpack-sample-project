//对象代理

{
    //ES3 数据保护
    var Person = function(){
        var data = {
            name:'es3',
            sex:'male',
            age: 15
        }
        this.get = function(key){//取值
            return data[key];
        }
        this.set = function(key,value){//赋值
            if(key !== 'sex'){
                data[key] = value;
            }
        }
    }

    //声明一个实例
    var person = new Person();
    //读取
    console.table({
        name:person.get('name'),
        sex:person.get('sex'),
        age:person.get('age')
    })
    //修改
    person.set('name','es3-cname');
    console.table({
        name:person.get('name'),
        sex:person.get('sex'),
        age:person.get('age')
    })
    person.set('sex','female');//无法修改 起到了数据保护的作用

}


{
    //ES5 数据保护
    var Person = {
        name:'es5',
        age:15
    };
    //通过api保护数据
    Object.defineProperty(Person,'sex',{
        writable:false,
        value:'male'
    });
    console.table({
        name:Person.name,
        sex:Person.sex,
        age:Person.age
    })
    try{
        Person.sex = 'female';//无法更改 被保护了
    }catch(e){
        console.log(e)
    }finally{

    }
}
//ES3/ES5的保护只能读和写，
//ES6可以设置什么情况读，什么情况写

{
    //ES6 数据保护
    let Person = {
        name:'es6',
        sex:'male',
        age:15
    };
    let person = new Proxy(Person,{//new代理,person对象暴露给用户使用
        get(target,key){//取数据  target：代理的数据(Person)
            return target[key]
        },
        set(target,key,value){
            if(key!=='sex'){
                target[key]=value;
            }
        }
    })

    console.table({
        name:person.name,
        sex:person.sex,
        age:person.age
    })

    try{
        person.sex = 'female'
    }catch(e){
        console.log(e)
    }finally{
        
    }

}