import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo,completeTodo ,fetchList} from '../actions/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Bar from '../components/common/Bar'
import Tab from '../components/common/Tab'

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, reducerTodos } = this.props
    return (
      <div>
        <Bar center='发现'/>
        <div style={Styles.content}>
          <AddTodo
            onAddClick={text =>
              dispatch(fetchList(text))
            } />
          <TodoList
            todos={reducerTodos} 
            onTodoClick={index=> dispatch(completeTodo(index))}/>
        </div>
        <Tab/>
      </div>
    )
  }
}


function map(state) {
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