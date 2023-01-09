/** @format */

import styled from 'styled-components'
import FacebookIcon from '../assets/facebook.png'

function Footer() {
  return (
    <Container>
      <Copyright>Majestic Domiciliation Ⓒ</Copyright>
      <SocialMedia>
        <SocialIcon src={FacebookIcon} />
      </SocialMedia>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Copyright = styled.span``

const SocialMedia = styled.div`
  display: flex;
`

const SocialIcon = styled.img`
  width: 25px;
  height: 25px;
`
