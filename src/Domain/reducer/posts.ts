/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Functions
import { createPost, savePostsToState, editPost, removePost } from '../post'

export const ACTIONS = {
  CREATE_POST: 'CREATE_POST',
  GET_ALL_POSTS: 'GET_ALL_POSTS',
  EDIT_POST: 'EDIT_POST',
  REMOVE_POST: 'REMOVE_POST'
}

export const reducer = (state: [], action: any): any => {
  switch (action.type) {
    case ACTIONS.GET_ALL_POSTS:
      return savePostsToState()
    case ACTIONS.CREATE_POST:
      return createPost(action.payload.id, action.payload.value)
    case ACTIONS.EDIT_POST:
      return editPost(action.payload.id, action.payload.value)
    case ACTIONS.REMOVE_POST:
      return removePost(action.payload.id)
    default:
      return state
  }
}
