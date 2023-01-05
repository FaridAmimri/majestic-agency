/** @format */

import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <Copyright>Majestic Domiciliation Ⓒ</Copyright>
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
