/** @format */

import styled from 'styled-components'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'

function App() {
  return (
    <Container className='App'>
      <Navbar />
      <Introduction />
      <PolygonShape />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`

const PolygonShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  z-index: -1;
`
