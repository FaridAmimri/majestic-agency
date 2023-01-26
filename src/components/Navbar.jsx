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
          <AgreementContainer>
            <ThemeProvider theme={theme}>
              <Button variant='outlined' size='small'>
                Agrément n°59-2022-15
              </Button>
            </ThemeProvider>
          </AgreementContainer>
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

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 50%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Wrapper = styled.div`
  flex: 4;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 50%;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    flex: 3;
    justify-content: center;
  }
`

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 0;
  }
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-right: 16px;
    font-size: 18px;
  }
  @media only screen and (max-width: 480px) {
    margin-right: 14px;
    font-size: 15px;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const AgreementContainer = styled.div`
  width: 120px;
  margin-right: 10px;

  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
`

const MarianneImg = styled.img`
  width: 20%;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`
