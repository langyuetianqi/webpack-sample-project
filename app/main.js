//js入口文件  把Greeter模块返回的节点插入页面

// const greeter = require('./Greeter.js');
// document.querySelector('#root').appendChild(greeter());


//es6 写法
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './const';
import './scope';
import './arrow-function';
import './parameter';
import './proxy';

import './main.css';//使用require导入css文件  在引入css文件时就把loader加入进去:

render(<Greeter />,document.getElementById('root'));