import { combineReducers } from 'redux'

import postsReducer from './posts'

const reducers = {
  schedule: postsReducer
}
export default combineReducers(reducers)
