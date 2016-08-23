import React , { Component } from 'react'

import Bar from '../common/Bar'


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

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}