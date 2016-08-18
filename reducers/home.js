import { combineReducers } from 'redux'
import { FETCH_LIST,FETCH_LIST_ITEM } from '../actions/home'

function fetchList(state = [], action) {
  switch (action.type) {
    case FETCH_LIST:
      return action.text
    case FETCH_LIST_ITEM:
    	console.log('reducers',action.index)
      return state[action.index]
    default:
      return state
  }
}


const todoApp = combineReducers({
  fetchList
})

export default todoApp