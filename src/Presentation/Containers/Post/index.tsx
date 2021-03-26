import React, { BaseSyntheticEvent, useState, memo } from 'react'
import styled from 'styled-components'

// Components
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import TextArea from '../../Components/TextArea'

// Function
import { editPost, removePost } from '../../../Domain/post'

interface PropsInterface {
  id: string
  title: string
  text: string
  reRender: () => void
}

interface StateInterface {
  title: string
  text: string
}

const Post = (props: PropsInterface): JSX.Element => {
  const [isEditable, setIsEditable] = useState<boolean>(false)

  const [state, setState] = useState<StateInterface>({ title: '', text: '' })

  const updateState = (e: BaseSyntheticEvent): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const setEditable = (): void => {
    setIsEditable(true)
  }

  const save = (): void => {
    setIsEditable(false)
    editPost(props.id, state)
    props.reRender()
  }

  const remove = (): void => {
    const response = removePost(props.id)
    props.reRender()
    alert(response)
  }

  return (
    <Container>
      {isEditable ? (
        <Input defaultValue={props.title} name="title" onChange={updateState} />
      ) : (
        <h1>{props.title}</h1>
      )}
      {isEditable ? (
        <TextArea
          defaultValue={props.text}
          name="text"
          onChange={updateState}
        />
      ) : (
        <p>{props.text}</p>
      )}
      <Menu>
        <Button text="Edit" onClick={setEditable} />
        <Button text="Save" onClick={save} />
        <Button text="Remove" onClick={remove} />
      </Menu>
    </Container>
  )
}

export default memo(Post)

const Container = styled.div`
  width: 100%;
  margin: 40px 0;

  h1,
  p,
  input {
    color: #e6e9ec;
  }

  h1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #4a4e51;
    margin-bottom: 20px;
  }

  button {
    background: none;
    color: #acb2b8;

    :hover {
      color: #b9c0c7;
      background: transparent;
    }
  }

  input {
    margin-bottom: 20px;
  }
`
const Menu = styled.div``
