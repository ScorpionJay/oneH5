# one h5

## What

one h5 demo

## Use
-	react
-	react-redux
-	react-thunk
-	react-router
-	webpack
-	fetch
-	sass

## How

1. install
   
	npm install

	npm install webpack -g

2. run

	webpack-dev-server --progress --colors

	open browser http://localhost:8080/webpack-dev-server/dev

3. package
	
	webpack -p --config webpack.config.build.js

	这里的 -p 是 production 模式的意思，它会对 css, js 文件进行压缩。后面 --config 就是指定此次运行的配置文件。


##　TODO
1. fetch is no supported by Safari

	https://github.com/github/fetch



## 问题

不支持fetch，使用babel-polyfill

~~~js
entry: {
        app: [ 'babel-polyfill', './src/index.js' ]
},


调用的地引入这个
import 'whatwg-fetch'
~~~
