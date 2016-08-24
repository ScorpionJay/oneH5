import React , { Component } from 'react'

import Bar from '../common/Bar'
import {Icon} from 'react-fa'

import {Link } from 'react-router'

export default class Login extends Component{

	handleClick(e) {
		console.log(this.refs.username.value,this.refs.password.value)
		this.props.onLoginClick(this.refs.username.value,this.refs.password.value)
	}
	render(){
		
		return (
			<div style={Styles.container}>
				
				<div>
					<div>
						用户名
						<input type='text' ref='username'/>
					</div>
					<div>
						密码
						<input type='password' ref='password'/>
					</div>
					<div>
						<button onClick={(e) => this.handleClick(e)}>登录</button>
					</div>
				</div>
			</div>
		);
	}
}

const Styles = {
 	container:{
 		display:'flex',
 		flexDirection: 'column',
 		justifyContent:'center',
 		alignItems: 'center',
 		flex:1,
 	}
}