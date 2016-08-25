import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/index'

import { login } from '../actions/login'
import storage  from '../storage'

module.exports = function(initialState) {
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  let store = createStoreWithMiddleware(reducers, initialState)

  // get token from storage
  store.dispatch(login(storage.get('token')))

  return store
}