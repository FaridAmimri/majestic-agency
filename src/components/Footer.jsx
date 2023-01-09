/** @format */

import styled from 'styled-components'
import FacebookIcon from '../assets/facebook.png'

function Footer() {
  return (
    <Container>
      <Copyright>Retrouvez-nous sur Facebook</Copyright>

      <SocialMedia>
        <a
          href='https://www.facebook.com/profile.php?id=100088925397727'
          target='blank'
        >
          <SocialIcon src={FacebookIcon} />
          <SocialText>Majestic Dom</SocialText>
        </a>
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
  padding-left: 10px;
  a {
    text-decoration-line: none;
    color: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const SocialIcon = styled.img`
  width: 25px;
  height: 25px;
`

const SocialText = styled.span`
  padding-left: 5px;
`
