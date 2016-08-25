import { combineReducers } from 'redux'
import { FOLLOWERS } from '../actions/find'


function followers(state = [], action) {
  switch (action.type) {
    case FOLLOWERS:
      return action.followers
    default:
      return state
  }
}


const todoApp = combineReducers({
  followers
})

export default todoApp