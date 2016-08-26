import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { meFetchData} from '../actions/me'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Bar from '../components/common/Bar'
import Me from '../components/me/Me'
import Tab from '../components/common/Tab'

class App extends Component {

  componentDidMount() {
    const { dispatch,login } = this.props
    if(login)  dispatch(meFetchData(login))
  }


  render() {
    // Injected by connect() call:
    const { dispatch, login,me } = this.props
    return (
      <div>
        <Bar center='我'/>
        <div style={Styles.content}>
          <Me login={login}  me={me}/>
        </div>
        <Tab/>
      </div>
    )
  }
}


function map(state) {
  return {
    login: state.login.login,
    me: state.me.user
  }
}

export default connect(map)(App)

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}