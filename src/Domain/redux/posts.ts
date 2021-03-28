import { LocalStorage } from '../../Data/localstorage'
import { Http } from '../../Data/http'
import { UrlBuilder } from '../../Data/urlBuilder'

interface Action {
  type: string
  payload: any
}

interface Value {
  title: string
  text: string
}

export const ACTIONS = {
  GET_LOCAL_POSTS: 'GET_LOCAL_POSTS',
  GET_REMOTE_POSTS: 'GET_REMOTE_POSTS',
  CREATE_POST: 'CREATE_POST',
  EDIT_POST: 'EDIT_POST',
  REMOVE_POST: 'REMOVE_POST'
}

export const getRemotePosts = () => async (dispatch: any) => {
  const posts: any = await Http.get(UrlBuilder.getPosts())
  if (posts.status !== 'ok') return
  const payload = posts.articles.map((post: any) => {
    return {
      id: post.publishedAt,
      value: {
        title: post.title,
        text: post.description
      }
    }
  })
  return dispatch({
    type: ACTIONS.GET_REMOTE_POSTS,
    payload: payload
  })
}

export const getPostsFromLocalStorage = (): Array<{
  id: string
  value: Value
}> => {
  const posts = localStorage
  const arrayOfPosts = Object.entries(posts).map((post) => ({
    id: post[0],
    value: JSON.parse(post[1])
  }))

  return arrayOfPosts
}

export const getLocalPosts = () => (dispatch: any) => {
  const posts = getPostsFromLocalStorage()

  return dispatch({
    type: ACTIONS.GET_LOCAL_POSTS,
    payload: posts
  })
}

export const createPost = (id: string, value: Value) => (
  dispatch: any
): Action => {
  LocalStorage.setItem(id, JSON.stringify(value))
  const posts = getPostsFromLocalStorage()

  return dispatch({
    type: ACTIONS.CREATE_POST,
    payload: posts
  })
}

export const removePost = (id: string) => (dispatch: any) => {
  LocalStorage.removeItem(id)
  const posts = getPostsFromLocalStorage()

  return dispatch({
    type: ACTIONS.REMOVE_POST,
    payload: posts
  })
}

export const editPost = (id: string, value: Value) => (dispatch: any) => {
  LocalStorage.setItem(id, JSON.stringify(value))
  const posts = getPostsFromLocalStorage()

  return dispatch({
    type: ACTIONS.EDIT_POST,
    payload: posts
  })
}

export const postsReducer = (state: any = {}, action: any): any => {
  switch (action.type) {
    case ACTIONS.GET_REMOTE_POSTS:
      return {
        ...state,
        remotePosts: action.payload
      }
    case ACTIONS.GET_LOCAL_POSTS:
      return {
        ...state,
        localPosts: action.payload
      }
    case ACTIONS.CREATE_POST:
      return {
        ...state,
        localPosts: action.payload
      }
    case ACTIONS.EDIT_POST:
      return {
        ...state,
        localPosts: action.payload
      }
    case ACTIONS.REMOVE_POST:
      return {
        ...state,
        localPosts: action.payload
      }
    default:
      return state
  }
}

export default postsReducer
