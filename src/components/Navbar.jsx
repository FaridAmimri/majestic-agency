/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LogoIcon from '../assets/logo.png'
import MarianneIcon from '../assets/marianne.png'

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
      <LogoContainer>
        <LogoImg src={LogoIcon} alt='Logo Majestic Domiciliation'></LogoImg>
      </LogoContainer>
      <Wrapper>
        <Center>
          <Menu>
            <MenuItem>
              <a href='#feature'>Services</a>
            </MenuItem>
            <MenuItem>
              <a href='#service'>Pour Qui ?</a>
            </MenuItem>
            <MenuItem>
              <a href='#price'>Nos solutions</a>
            </MenuItem>
          </Menu>
        </Center>
        <Right>
          <ThemeProvider theme={theme}>
            <Button variant='outlined' size='small'>
              Agrément n° 59-2022-15
            </Button>
          </ThemeProvider>
          <MarianneImg src={MarianneIcon}></MarianneImg>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  display: flex;
`

const LogoContainer = styled.div`
  flex: 1;
`

const LogoImg = styled.img`
  padding: 20px 0 0 20px;
  width: 25%;
`

const Wrapper = styled.div`
  flex: 4;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
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
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0;
  }
`

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: grey;

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MarianneImg = styled.img`
  width: 20%;
`
