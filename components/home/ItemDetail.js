import React , { Component } from 'react'


export default class List extends Component{


	render(){
		const {id,name,description} = this.props.data
		return (
			<div>
				id:{id}<br/>
				name:{name}<br/>
				description:{description}<br/>
			</div>
		);
	}
}