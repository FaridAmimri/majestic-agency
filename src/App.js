/** @format */

import styled, { css } from 'styled-components'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Feature from './components/Feature'
import Service from './components/Service'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false

  return (
    <>
      <Container>
        <Navbar />
        <Introduction />
        <IntroductionShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
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
  height: 100vh;
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
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 50% 100%);
  background-color: crimson;
`

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 50% 0%, 33% 100%, 0 100%);
  background-color: pink;
`

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`
