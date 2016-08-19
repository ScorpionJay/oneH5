import React , { Component } from 'react'

import Bar from '../common/Bar'


export default class List extends Component{


	render(){
		const {id,name,description} = this.props.data
		return (
			<div>
				<Bar left='back' center='详情'/>

				id:{id}<br/>
				name:{name}<br/>
				description:{description}<br/>
			</div>
		);
	}
}