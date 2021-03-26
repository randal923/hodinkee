import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

interface TextAreaInterface {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  name?: string
  defaultValue?: string
}

const TextArea = (props: TextAreaInterface): JSX.Element => (
  <Container
    onChange={props.onChange}
    placeholder={props.placeholder}
    name={props.name}
    defaultValue={props.defaultValue}
  />
)

export default TextArea

const Container = styled.textarea`
  color: white;
  border: 1px solid #697075;
  padding: 10px;
  background: transparent;
  border-radius: 3px;
  max-width: 100%;
  min-width: 100%;
  :focus {
    outline: none;
    border: 1px solid #378ad3;
  }
`
