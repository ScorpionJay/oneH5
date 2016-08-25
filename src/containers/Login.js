import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory,history,router } from 'react-router'
import { loginFetch} from '../actions/login'

import Bar from '../components/common/Bar'

import Login from '../components/login/Login'

import Alert from '../components/common/Alert'

class App extends Component {

  redirect(){
     const { history, store } = this.context
    console.log('redirect ... ')
    browserHistory.push('me')
    // history.pushState(null, '/me')
    this.props.history.push('me')
    // router.push('me')
    //this.context.router.push('me')
  }

  render() {
    // Injected by connect() call:
    const { dispatch, loginError } = this.props
    return (
      <div>
        <Bar center='发现'/>
        <div style={Styles.content}>
          <Login onLoginClick={(username,password) =>dispatch(loginFetch(username,password, ()=>this.redirect()  ))} />
        </div>
        <Alert show={true} message = {loginError}/>
      </div>
    )
  }
}


function map(state) {
  console.log("state" , state )
  return {
    login: state.login.login,
    loginError: state.login.loginError
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(map)(App)

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}