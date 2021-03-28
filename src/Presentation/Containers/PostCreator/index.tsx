/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, BaseSyntheticEvent } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

// Components
import Button from '../../Components/Button'
import TextArea from '../../Components/TextArea'
import Input from '../../Components/Input'
import { createPost } from 'Domain/redux/posts'

interface State {
  title: string
  text: string
}

const PostCreator = (): JSX.Element => {
  const dispatch = useDispatch()
  const [state, setState] = useState<State>({ title: '', text: '' })

  const updateState = (e: BaseSyntheticEvent): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const store = (): void => {
    if (!state?.text || !state?.title) return alert("Fields can't be empty")
    dispatch(createPost(uuid(), state))
  }

  return (
    <Container>
      <Input onChange={updateState} placeholder="Title field..." name="title" />
      <TextArea
        onChange={updateState}
        placeholder="Text field..."
        name="text"
      />
      <Button onClick={store} text="Create Post" />
    </Container>
  )
}

export default PostCreator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 20px;

  textarea {
    margin: 10px 0;
  }
`
