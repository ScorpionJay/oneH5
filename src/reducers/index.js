import { combineReducers } from 'redux'
import  home from './home'
import  reducers from './reducers'
import  login from './login'

const todoApp = combineReducers({
  login,home,reducers
})

export default todoApp