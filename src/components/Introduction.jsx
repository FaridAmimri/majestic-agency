/** @format */

import styled from 'styled-components'
import Animation from './Animation'

function Introduction() {
  return (
    <Container>
      <Left>
        <Title>La solution qui change la vie</Title>
        <Description>Vous en avez rêvé, on l'a fait</Description>
      </Left>
      <Animation />
    </Container>
  )
}

export default Introduction

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
  }
`

const Left = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`

const Title = styled.h1`
  width: 60%;
  font-size: 60px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 40px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    font-size: 50px;
  }
`

const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  font-weight: 500;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
`
