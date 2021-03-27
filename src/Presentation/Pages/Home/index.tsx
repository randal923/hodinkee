import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components'

// Containers
import PostCreator from '../../Containers/PostCreator'
import Post from '../../Containers/Post'

// Functions
import { ACTIONS, reducer } from '../../../Domain/reducer/posts'
import { getPostsFromUrl } from '../../../Domain/post'

// Interfaces
import { IPost } from '../../../Data/types'

const Home = (): JSX.Element => {
  const [posts, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_ALL_POSTS })
    getPostsFromUrl()
  }, [])

  return (
    <Container>
      <PostCreator dispatch={dispatch} />
      {posts?.map((post: IPost) => (
        <Post
          key={post.id}
          id={post.id}
          value={post.value}
          dispatch={dispatch}
        />
      ))}
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
