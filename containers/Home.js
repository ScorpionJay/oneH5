import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchList,fetchListItem } from '../actions/home'

import Slide from '../components/Home/Slide'
import List from '../components/Home/List'

import Bar from '../components/common/Bar'

class App extends Component {

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(fetchList(1))
  }

  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Bar center='首页'/>

        <Slide/>
        <List data={this.props.data} />
      </div>
    )
  }
}

function map(state) {
  console.log("state" , state )
  return {
    data: state.home.fetchList
  }
}

export default connect(map)(App)