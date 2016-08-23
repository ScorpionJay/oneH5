import { combineReducers } from 'redux'
import  home from './home'
import  reducers from './reducers'

const todoApp = combineReducers({
  home,reducers
})

export default todoApp