var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //引入清除文件插件
module.exports = {
	entry: __dirname + "/app/main.js",//唯一入口文件   注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
	output:{
		//默认方式输出
		// path: __dirname + "/public",//打包后文件存放的地方
		// libraryTarget: 'umd',//定义模块运行的方式
		// filename: "bundle.js"//打包后输出文件的文件名
		//插件方式输出
		path:__dirname + "/build",
		filename:"bundle-[hash].js"// 缓存机制：添加哈希值到缓存中
	},
	devtool:'eval-source-map',//生成Source Maps，方便调试 4钟生成方式 （eval-source-map：开发阶段用）； cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
	devServer:{
		contentBase:'./build',//本地服务器加载的页面所在目录
		historyApiFallback:true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
		inline:true//修改代码后，实时刷新页面
	},
	module:{//组件模块配置
		rules:[//规章制度配置
			{//配置 babel 工具
				test: /(\.jsx|\.js)$/,
				use: {
					loader:"babel-loader"
				},
				exclude: /node_modules/
			},
			{ //配置 css 工具
				test: /\.css$/, 
				use: [
						{
							loader:'style-loader'
						},{
							loader:"css-loader",
							options:{
								modules:true,// 指定启用css modules   参数说明：path:当前文件夹名称；name:当前文件名称;local:当前样式名称   最后生成随机数  
								localIdentName:'[path][name]_[local]--[hash:base64:5]'// 指定css的类名格式  例子：app-Greeter_root--16xre
							}
						},{
							loader:"postcss-loader"
						}
					]
			}
		]//new HtmlWebpackPlugin(), 会在public下生成index.html文件   
	},//该插件将为你生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包
	plugins: [
		new HtmlWebpackPlugin({
			template:__dirname + "/app/index.tmpl.html"//new 一个插件实例 并传入相关参数 获取生成文件的参照模板
		}),
		new webpack.BannerPlugin("版权所有，翻版必究"),//为生成的包加版权声明
		new webpack.HotModuleReplacementPlugin(),//热加载插件
		new CleanWebpackPlugin()//实例化清缓存方法
	]
}