import { LocalStorage } from '../../Data/localstorage'

interface Value {
  title: string
  text: string
}

export const storePost = (key: string, value: Value): string => {
  LocalStorage.setItem(key, JSON.stringify(value))

  const getItem = LocalStorage.getItem(key)

  if (getItem) {
    return 'Post stored successfully.'
  }

  return 'Failed to store post.'
}

export const getAllPosts = (): Record<string, string> => {
  return localStorage
}

export const editPost = (key: string, value: Value): string => {
  const post = LocalStorage.getItem(key)

  if (!post) return 'Post not found.'

  LocalStorage.setItem(key, JSON.stringify(value))

  return 'Post edited successfully.'
}

export const removePost = (key: string): string => {
  const post = LocalStorage.getItem(key)

  if (!post) return 'Post not found.'

  LocalStorage.removeItem(key)

  return 'Post remoed successfully.'
}
