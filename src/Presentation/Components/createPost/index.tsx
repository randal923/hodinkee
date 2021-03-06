import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  content: string
  image?: {
    src: string
    alt: string
  }
}

const CreatePost = ({ title, content, image }: Props): JSX.Element => (
  <Container>
    <h1>{title}</h1>
    <p>{content}</p>
    {image && <img src={image.src} alt={image.alt} />}
  </Container>
)

export default CreatePost

const Container = styled.div``
