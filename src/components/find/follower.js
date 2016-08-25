import React , { Component } from 'react'

import Bar from '../common/Bar'
import {Icon} from 'react-fa'

import {Link } from 'react-router'

export default class Login extends Component{

	
	render(){
		const { avatar_url , login } = this.props
		return (
			<div style={Styles.container}>
				<img src={ avatar_url } style={{width:50,height:50}}/>
				{ login }
			</div>
		);
	}
}

const Styles = {
 	container:{
 		display:'flex',
 		flex:1,
 	}
}