import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  name: string
  defaultValue?: string
}

const Input = (props: Props): JSX.Element => (
  <Container
    onChange={props.onChange}
    placeholder={props.placeholder}
    name={props.name}
    defaultValue={props.defaultValue}
  />
)

export default Input

const Container = styled.input`
  color: white;
  border: 1px solid #697075;
  padding: 10px;
  background: transparent;
  border-radius: 3px;
  width: 100%;
  :focus {
    outline: none;
    border: 1px solid #378ad3;
  }
`
