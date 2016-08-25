import React , { Component } from 'react'

import Bar from '../common/Bar'
import {Icon} from 'react-fa'

import Follower from './follower'

import {Link } from 'react-router'

export default class Followers extends Component{

	
	render(){
		return (
			<div >
				{
					this.props.followers.map((follower, index) =>
		          	<Follower {...follower} key={index} />
		        	)
		    	}
			</div>
		)
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