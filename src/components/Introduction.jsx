/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import IntroIcon from '../assets/intro.png'
import Animation from './Animation'

function Introduction() {
  return (
    <Container>
      <Left>
        <Title>La solution pour votre entreprise</Title>
        <Description>
          Entreprendre l'esprit tranquille passe par la domiciliation de votre
          entreprise chez Majestic.
        </Description>
        <Information>
          <Button variant='contained' size='medium'>
            <a href='#contact'> Domicilier mon entreprise</a>
          </Button>
          <Contact>
            <ContactPhone>
              <PhoneIcon />
              <PhoneNumber>09 86 12 18 21</PhoneNumber>
            </ContactPhone>
            <ContactText>Besoin d'aide ?</ContactText>
          </Contact>
        </Information>
      </Left>
      <Right>
        <Image src={IntroIcon} />
      </Right>
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

const Information = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a:link {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    padding: 0;
  }
`

const ContactPhone = styled.span`
  color: #f0667d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

const PhoneNumber = styled.p`
  font-size: 20px;
  padding-left: 5px;
`

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`

const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    align-self: flex-end;
  }
`

const Image = styled.img`
  width: 115%;
  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`
