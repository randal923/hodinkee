import React, { useState, BaseSyntheticEvent } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

// Functions
import { storePost } from '../../../Domain/post'

// Components
import Button from '../../Components/Button'
import TextArea from '../../Components/TextArea'
import Input from '../../Components/Input'

interface State {
  title?: string
  text?: string
}

interface PropsInterface {
  reRender: () => void
}

const PostCreator = (props: PropsInterface): JSX.Element => {
  const [state, setState] = useState<State>()

  const updateState = (e: BaseSyntheticEvent): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const store = (): void => {
    if (!state?.text || !state?.title) return alert("Fields can't be empty")
    const result = storePost(uuid(), { title: state.title, text: state.text })
    props.reRender()
    alert(result)
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
