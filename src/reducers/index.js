import { combineReducers } from 'redux'
import  home from './home'
import  reducers from './reducers'
import  login from './login'
import  me from './me'
import  find from './find'
import  spin from './spin'

const todoApp = combineReducers({
  login,home,reducers,me,find,spin
})

export default todoApp