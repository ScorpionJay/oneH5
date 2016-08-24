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

2. run

	webpack-dev-server --progress --colors

	open browser http://localhost:8080/webpack-dev-server/

3. package
	
	webpack


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
