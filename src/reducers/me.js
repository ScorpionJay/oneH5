import { combineReducers } from 'redux'
import { USER } from '../actions/me'

function user(state = {}, action) {
  console.log('data hhhh' , action)
  switch (action.type) {
    case USER:
      return action.data
    default:
      return state
  }
}


const todoApp = combineReducers({
  user
})

export default todoApp