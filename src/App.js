/** @format */

import styled, { css } from 'styled-components'
import Feature from './components/Feature'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'

function App() {
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
    </>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
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
