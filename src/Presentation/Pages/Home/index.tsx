import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Containers
import PostCreator from '../../Containers/PostCreator'
import Post from '../../Containers/Post'

// Functions
import { getAllPosts } from '../../../Domain/post'

interface State {
  key: string
  value: { title: string; text: string }
}

const Home = (): JSX.Element => {
  const [posts, setPosts] = useState<State[]>([])

  useEffect(() => {
    savePostsToState()
  }, [])

  const savePostsToState = (): void => {
    const posts = getAllPosts()

    const arrayOfPosts = Object.entries(posts).map((post) => ({
      key: post[0],
      value: JSON.parse(post[1])
    }))

    setPosts(arrayOfPosts)
  }

  const reRender = (): void => {
    savePostsToState()
  }

  return (
    <Container>
      <PostCreator reRender={reRender} />
      {posts.map((post) => (
        <Post
          key={post.key}
          title={post.value.title}
          text={post.value.text}
          id={post.key}
          reRender={reRender}
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
