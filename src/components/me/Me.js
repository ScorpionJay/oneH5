import React , { Component } from 'react'

import Bar from '../common/Bar'
import {Icon} from 'react-fa'

import {Link } from 'react-router'

export default class Me extends Component{


	constructor(props) {
	  super(props);
	  this.state = {};
	}


	render(){
		
		const {avatar_url,login} = this.props.me

		return (
			<div style={Styles.container}>

				<div style={Styles.row}>
					<Link to={"login"} >
					<div style={Styles.picture}>
						<div style={Styles.left}>
							<img src={avatar_url} style={{width:40,height:40}}/>
							{login}
						</div>
						<Icon name="angle-right"  style={Styles.pictureRight}/>
					</div>
					</Link>
				</div>

				<div style={Styles.row}>
					<div style={Styles.item}>
						<div style={Styles.left}>
							<Icon name="photo" style={Styles.leftIcon}/>
							<div style={Styles.leftText}>相册</div>
						</div>
						<Icon name="angle-right"  style={Styles.right}/>
					</div>
					
					<div style={Styles.item}>
						<div style={Styles.left}>
							<Icon name="cube" style={Styles.leftIcon} />
							<div style={Styles.leftText}>收藏</div>
						</div>
						<Icon name="angle-right" style={Styles.right}/>
					</div>
					<div style={Styles.item}>
						<div style={Styles.left}>
							<Icon name="gear" style={Styles.leftIcon}/>
							<div style={Styles.leftText}>设置</div>
						</div>
						<Icon name="angle-right" style={Styles.right}/>
					</div>
				</div>
			</div>
		);
	}
}

const Styles = {
 	container: {
 		display:'flex',
 		flexDirection:'column',
 	},
 	row: {
		marginBottom:10
 	},
 	item:{
		display:'flex',
		padding:10,
		backgroundColor:'#fff',
		fontSize:20,
		borderTop:'1px solid #eee'
 	},
 	left:{
 		justifyContent: 'flex-start',
 		flex:1,
 		display:'flex',
 	},
 	leftIcon:{
 		color: "rgb(11, 101, 216)"
 	},
 	leftText: {
 		marginLeft:10,
 		color:'rgb(117, 112, 112)'
 	},
 	right:{
 		alignSelf: 'flex-end',
 	},
 	picture:{
 		height:50,
 		display:'flex',
		padding:10,
		backgroundColor:'#fff',
		color:'#aaa',
		fontSize:20
 	},
 	pictureRight:{
 		alignSelf: 'center',
 	}
}