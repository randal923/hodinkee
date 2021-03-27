import { LocalStorage } from '../../Data/localstorage'
import { Http } from '../../Data/http'
import { UrlBuilder } from '../../Data/urlBuilder'

// Interfaces
import { IPost } from '../../Data/types/'

interface Value {
  title: string
  text: string
}

interface Posts {
  id: string
  value: IPost
}

export const createPost = (id: string, value: Value): Posts[] => {
  LocalStorage.setItem(id, JSON.stringify(value))

  return savePostsToState()
}

export const getAllPosts = (): Record<string, string> => {
  return localStorage
}

export const editPost = (id: string, value: Value): Posts[] => {
  LocalStorage.setItem(id, JSON.stringify(value))
  return savePostsToState()
}

export const removePost = (id: string): Posts[] => {
  LocalStorage.removeItem(id)

  return savePostsToState()
}

export const savePostsToState = (): Posts[] => {
  const posts = getAllPosts()

  const arrayOfPosts = Object.entries(posts).map((post) => ({
    id: post[0],
    value: JSON.parse(post[1])
  }))

  return arrayOfPosts
}

export const getPostsFromUrl = async (): Promise<void> => {
  await Http.get(UrlBuilder.getPosts())
}
