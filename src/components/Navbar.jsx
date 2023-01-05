/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Navbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      }
    }
  })

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Majestic</Logo>
        </Left>
        <Center>
          <Menu>
            <MenuItem>Nos services</MenuItem>
            <MenuItem>Nos guides</MenuItem>
            <MenuItem>Nos offres</MenuItem>
          </Menu>
        </Center>
        <Right>
          <ThemeProvider theme={theme}>
            <Button variant='outlined' size='small'>
              Contactez-nous
            </Button>
          </ThemeProvider>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  height: 50px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
