import React , { Component } from 'react'
import {Link } from 'react-router'

import {Icon} from 'react-fa'

export default class ListItem extends Component{
	render(){
		return (
			<Link to={`/itemDetail/${this.props.id}`} >
				<div style={Styles.row} >
					<div style={Styles.left}>{this.props.name}</div>
					<div style={Styles.right}><Icon name="chevron-right" /></div>
				</div>
			</Link>
		);
	}
}

const Styles = {
	row: {
		display: 'flex',
		flexDirection: 'row',// 默认
		justifyContent:'space-between',
		backgroundColor:'#fff',
		padding:5,
		height:45,
		flex: 1,
		marginBottom:5,
	},
	left: {
		paddingLeft:10,
		marginTop:15,
	},
	right: {
		paddingRight:10,
		marginTop:15,
	}
}