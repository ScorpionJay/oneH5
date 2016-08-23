import React , { Component} from  'react'

import {Icon} from 'react-fa'

export default class Bar extends Component {

	_back(){
		history.go(-1)
	}

	render() {
		let left
		if( this.props.left ){
			left = <Icon name="chevron-left" onClick={this._back}/>			
		}

		return (
			<div style={Styles.container}>
				<div style={Styles.left}>
					{left}
				</div>
				<div style={Styles.center}>
					{this.props.center}
				</div>
				<div style={Styles.right}>
					{this.props.right}
				</div>
			</div>
		);
	}

}

// 样式
const Styles = {
	container:{
		background:'black',
		height:30,
		lineHeight:'30px',
		color:'#fff',
		display:'flex',
		flex:1,
		padding:5,
		position:'fixed',
		width:'100%',
		top:0,
	},
	left:{
		flex:1,
	},
	center:{
		flex:1,
		textAlign:'center'
	},
	right:{
		flex:1,
		textAlign:'right'
	}
}