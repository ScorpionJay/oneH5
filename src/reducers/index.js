import { combineReducers } from 'redux'
import  home from './home'
import  reducers from './reducers'
import  login from './login'
import  me from './me'

const todoApp = combineReducers({
  login,home,reducers,me
})

export default todoApp