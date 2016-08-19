import React , {Component } from 'react'
import { Router, IndexRoute ,Route, hashHistory,Link,Redirect } from 'react-router'

import {Icon} from 'react-fa'

import Home from './containers/Home'
import ItemDetail from './containers/ItemDetail'
import TodoItem from './containers/TodoItem'
import Find from './containers/Find'
import Me from './containers/Me'



/* App */
class App extends Component{
	render(){
		return (
			<div className="nav">

				
				
				<div className="content">{this.props.children}</div>

				<div className='footer'>
					<ul className="nav-ul">
						<li>
							<Link to="/home" activeClassName="active"> 
								<Icon name="star" />
								<div>首页</div>
							</Link>
						</li>
						<li>
							<Link to="/find" activeClassName="active">
								<Icon name="rocket" />
								<div>发现</div>
							</Link>
						</li>
						<li>
							<Link to="/me" activeClassName="active">
								<Icon name="user" />
								<div>我</div>
							</Link>
						</li>
					</ul>
				</div>
				
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

// 样式
const Styles = {
	header:{
			background:'black',
			textAlign:'center',
			height:'40px',
			lineHeight:'40px',
			color:'#fff'
	}
}


export default Routes