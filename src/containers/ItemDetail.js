import React , { Component } from 'react'
import { connect } from 'react-redux'

import ItemDeatail from '../components/Home/ItemDetail'

import { fetchListItemApi } from '../actions/home'
import Bar from '../components/common/Bar'


export default class List extends Component{

	componentDidMount(){
		console.log('componentDidMount' + this.props.params.id);
		  
		    const { dispatch } = this.props
		    dispatch(fetchListItemApi(this.props.params.id))
		 
	}

	render(){
		return (
			<div>
				<Bar left='back' center='详情'/>

				<div style={Styles.content}>
					<ItemDeatail data={this.props.item}/>
				</div>
			</div>
		);
	}
}


function map(state) {
  console.log("state" , state )
  return {
    item: state.home.fetchItem
  }
}

export default connect(map)(List)

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}