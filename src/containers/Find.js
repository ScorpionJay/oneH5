import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchFollowers } from '../actions/find'
import Followers from '../components/find/followers'
import Bar from '../components/common/Bar'
import Tab from '../components/common/Tab'

class App extends Component {


  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(fetchFollowers())
  }



  render() {
    // Injected by connect() call:
    const { dispatch, followers } = this.props
    return (
      <div>
        <Bar center='发现'/>
        <div style={Styles.content}>
          <Followers followers={followers}/>
        </div>
        <Tab/>
      </div>
    )
  }
}


function map(state) {
  return {
    followers: state.find.followers
  }
}

export default connect(map)(App)

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}