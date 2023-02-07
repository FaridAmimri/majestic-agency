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
          href='https://www.instagram.com/majesticdomiciliation/?hl=fr'
          target='blank'
        >
          <SocialIcon src={InstaIcon} />
        </a>
        <a href='https://www.tiktok.com/@majesticdomdom' target='blank'>
          <SocialIcon src={TiktokIcon} />
        </a>
        <a
          href='https://www.linkedin.com/in/majestic-domiciliation-9b54b1262/'
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

  @media only screen and (min-width: 1440px) {
    min-height: 60px;
  }
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
