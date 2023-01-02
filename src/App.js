/** @format */

import styled from 'styled-components'
import Navbar from './components/Navbar'

function App() {
  return (
    <Container className='App'>
      <Navbar />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
`
