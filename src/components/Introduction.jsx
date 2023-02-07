/** @format */

import styled from 'styled-components'
import Animation from './Animation'

function Introduction() {
  return (
    <Container>
      <Left>
        <Title>La solution qui change la vie</Title>
        <Description>Vous en avez rêvé, on l'a fait.</Description>
      </Left>
      <Animation />
    </Container>
  )
}

export default Introduction

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;

  @media only screen and (min-width: 1440px) {
    height: calc(100vh - 220px);
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    justify-content: center;
  }
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`

const Left = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Title = styled.h1`
  width: 60%;
  font-size: 60px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    font-size: 50px;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 40px;
  }
`

const Description = styled.p`
  width: 60%;
  font-size: 30px;
  margin-top: 20px;
  font-weight: 500;
  color: #ff9124;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`
