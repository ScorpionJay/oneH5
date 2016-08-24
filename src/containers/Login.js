import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login} from '../actions/login'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Bar from '../components/common/Bar'

import Login from '../components/login/Login'

class App extends Component {

  render() {
    // Injected by connect() call:
    const { dispatch, reducerTodos } = this.props
    return (
      <div>
        <Bar center='发现'/>
        <div style={Styles.content}>
          <Login onLoginClick={(username,password) =>dispatch(login(username,password))} />
        </div>
      </div>
    )
  }
}


function map(state) {
  console.log("state" , state )
  return {
    reducerTodos: state.reducers.todos
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