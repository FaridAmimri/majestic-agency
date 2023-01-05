/** @format */

import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <Wrapper>
        <List>
          <Item>Nos services</Item>
          <Item>Nos offres</Item>
          <Item>A propos</Item>
        </List>
        <Copyright>Majestic Domiciliation Ⓒ</Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`

const Item = styled.li`
  margin-right: 30px;
`

const Copyright = styled.span``
