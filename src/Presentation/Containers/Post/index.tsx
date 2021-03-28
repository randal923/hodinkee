import React, { BaseSyntheticEvent, useState, memo } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

// Components
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import TextArea from '../../Components/TextArea'

// Functions
import { editPost, removePost } from '../../../Domain/redux/posts'

interface State {
  title: string
  text: string
}

export interface Props {
  isRemote: boolean
  id: string
  value: {
    title: string
    text: string
  }
}

const Post = (props: Props): JSX.Element => {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [state, setState] = useState<State>({ title: '', text: '' })

  const updateState = (e: BaseSyntheticEvent): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const setEditable = (): void => {
    setIsEditable(true)
    setState({ title: props.value.title, text: props.value.text })
  }

  const save = (): void => {
    setIsEditable(false)
    dispatch(editPost(props.id, state))
  }

  const remove = (): void => {
    dispatch(removePost(props.id))
  }

  return (
    <Container>
      {isEditable ? (
        <Input
          defaultValue={props.value.title}
          name="title"
          onChange={updateState}
        />
      ) : (
        <h1>{props.value.title}</h1>
      )}
      {isEditable ? (
        <TextArea
          defaultValue={props.value.text}
          name="text"
          onChange={updateState}
        />
      ) : (
        <p>{props.value.text}</p>
      )}
      {!props.isRemote && (
        <Menu>
          <Button text="Edit" onClick={setEditable} />
          <Button text="Save" onClick={save} />
          <Button text="Remove" onClick={remove} />
        </Menu>
      )}
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
