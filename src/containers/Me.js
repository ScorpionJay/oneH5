import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo,completeTodo ,fetchList} from '../actions/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Bar from '../components/common/Bar'
import Me from '../components/me/Me'
import Tab from '../components/common/Tab'

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, reducerTodos } = this.props
    return (
      <div>
        <Bar center='我'/>
        <div style={Styles.content}>
          <Me />
        </div>
        <Tab/>
      </div>
    )
  }
}


function map(state) {
  console.log("state" , state )
  return {
    reducerTodos: state.todos
  }
}

export default connect(map)(App)

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}