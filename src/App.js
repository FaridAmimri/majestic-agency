/** @format */

import './global.css'
import styled, { css } from 'styled-components'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Feature from './components/Feature'
import Service from './components/Service'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntroIcon from './assets/intro.jpg'

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Introduction />
        <IntroductionShape>
          <IntroductionImage src={IntroIcon} />
        </IntroductionShape>
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
  a:link {
    text-decoration: none;
    color: inherit;
  }
  a:visited {
    color: inherit;
  }
`

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const IntroductionShape = styled.div`
  ${Shape}
  clip-path: polygon(58% 0%, 100% 0%, 100% 100%, 45% 100%);

  @media only screen and (max-width: 480px) {
    background-color: var(--background-color);
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    background-color: var(--background-color);
  }
`

const IntroductionImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 56%;
  right: -1vw;

  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    display: none;
  }
`

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 45% 0%, 33% 100%, 0 100%);
  background-color: #ff912463;
`

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: var(--background-color);
`
