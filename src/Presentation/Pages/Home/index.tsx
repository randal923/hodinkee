import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

// Components
import Button from '../../Components/Button'

// Containers
import PostCreator from '../../Containers/PostCreator'
import Post from '../../Containers/Post'

// Functions
import { getLocalPosts, getRemotePosts } from '../../../Domain/redux/posts'

// Interfaces
import { IPost } from '../../../Data/types'

const Home = (): JSX.Element => {
  const dispatch = useDispatch()
  const [showLocalPosts, setShowLocalPosts] = useState<boolean>(true)
  const memoizedLocalPosts = useCallback(() => dispatch(getLocalPosts()), [
    dispatch
  ])
  const memoizedRemotPosts = useCallback(() => dispatch(getRemotePosts()), [
    dispatch
  ])
  const localPosts = useSelector<any, IPost[]>((state) => state.localPosts)
  const remotePosts = useSelector<any, IPost[]>((state) => state.remotePosts)

  useEffect(() => {
    memoizedLocalPosts()
    memoizedRemotPosts()
  }, [memoizedLocalPosts, memoizedRemotPosts])

  const handleLocal = (): void => {
    setShowLocalPosts(true)
  }

  const handleRemote = (): void => {
    setShowLocalPosts(false)
  }

  return (
    <Container>
      <PostCreator />
      <Nav>
        <Button text="Local Posts" onClick={handleLocal} />
        <Button text="Remote Posts" onClick={handleRemote} />
      </Nav>
      {showLocalPosts
        ? localPosts?.map((post: IPost) => (
            <Post
              isRemote={false}
              key={post.id}
              id={post.id}
              value={post.value}
            />
          ))
        : remotePosts?.map((post: IPost) => (
            <Post
              isRemote={true}
              key={post.id}
              id={post.id}
              value={post.value}
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

const Nav = styled.div`
  margin-top: 50px;
  button {
    background: none;
    color: #acb2b8;
    font-size: 1.8rem;
    font-weight: bold;

    :hover,
    :focus {
      outline: none;
      background: #378ad3;
      color: #b9c0c7;
      background: transparent;
    }
  }
`
