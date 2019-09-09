//按照CommonJS规范 导出这个函数为一个模块

// var config = require('./config.json');

// module.exports = function(){//导出
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }



//es6 写法
import React,{Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
    render(){
        return (
            <div className={styles.aqua}>
                <div className={styles.root}>
                    {config.greetText}
                </div>
            </div>
        );
    }
}


export default Greeter