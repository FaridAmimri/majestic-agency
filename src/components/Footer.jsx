/** @format */

import styled from 'styled-components'
import FacebookIcon from '../assets/facebook.png'
import InstaIcon from '../assets/instagram.png'
import TiktokIcon from '../assets/tiktok.png'
import LinkedinIcon from '../assets/linkedin.png'

function Footer() {
  return (
    <Container>
      <Copyright>Retrouvez-nous sur</Copyright>
      <SocialMedia>
        <a
          href='https://www.facebook.com/profile.php?id=100088925397727'
          target='blank'
        >
          <SocialIcon src={FacebookIcon} />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100088925397727'
          target='blank'
        >
          <SocialIcon src={InstaIcon} />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100088925397727'
          target='blank'
        >
          <SocialIcon src={TiktokIcon} />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100088925397727'
          target='blank'
        >
          <SocialIcon src={LinkedinIcon} />
        </a>
      </SocialMedia>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  min-height: 10vh;
  background-color: #111;
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Copyright = styled.span``

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
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
  padding-left: 8px;
`
