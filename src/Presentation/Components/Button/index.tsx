import React from 'react'
import styled from 'styled-components'

interface ButtonInterface {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: ButtonInterface): JSX.Element => (
  <Container onClick={onClick}>{text}</Container>
)

export default Button

const Container = styled.button`
  border: 1px solid transparent;
  padding: 0.8em;
  background: #378ad3;
  color: white;
  border-radius: 3px;
  :hover {
    background: #3ca4ff;
    cursor: pointer;
  }
`
