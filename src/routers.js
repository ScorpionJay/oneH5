import React , {Component } from 'react'
import { Router, IndexRoute ,Route, hashHistory,Link,Redirect } from 'react-router'

import {Icon} from 'react-fa'

import Home from './containers/Home'
import ItemDetail from './containers/ItemDetail'
import TodoItem from './containers/TodoItem'
import Find from './containers/Find'
import Me from './containers/Me'

import Login from './containers/Login'



/* App */
class App extends Component{
	render(){
		return (
			<div className="nav">
				<div className="content" >{this.props.children}</div>
			</div>
		);
	}
}

/* routes */
const Routes = {
	path: '/',
	component: App,
	indexRoute :{component: Home},
	childRoutes: [
		{ path: 'home', component: Home},
		{ path: 'todoItem', component: TodoItem},
		{ path: 'find', component: Find},
		{ path: 'me', component: Me},
		{ path: 'login', component: Login},
		{ path: 'itemDetail/:id', component: ItemDetail},
		{
			path: 'itemDetail',
			component: ItemDetail,
			childRoutes : [{
				path: 'itemDetal/:id',
				onEnter: ({ params }, replace) => replace(`/itemDetail/${params.id}`)
			}]
		},
		{
			component: Home,
			childRoutes: [{
				path: 'itemDetail/:id',component:ItemDetail
			}]
		}
	]
}



export default Routes