import React , { Component } from 'react'


export default class List extends Component{


// 渲染完成
	componentDidMount(){
		console.log('componentDidMount' + this.props.params.id);

		


	}

	render(){
		return (
			<div>
				test
			</div>
		);
	}
}