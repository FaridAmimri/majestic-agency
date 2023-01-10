/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LogoIcon from '../assets/logoicon.png'

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
          <LogoContainer>
            <LogoImg src={LogoIcon}></LogoImg>
            <LogoContent>
              <LogoTitle>Majestic</LogoTitle>
              <LogoSubTitle>Domiciliation</LogoSubTitle>
            </LogoContent>
          </LogoContainer>
        </Left>
        <Center>
          <Menu>
            <MenuItem>
              <a href='#feature'>Guide</a>
            </MenuItem>
            <MenuItem>
              <a href='#service'>Services</a>
            </MenuItem>
            <MenuItem>
              <a href='#price'>Formules</a>
            </MenuItem>
          </Menu>
        </Center>
        <Right>
          <ThemeProvider theme={theme}>
            <Button variant='outlined' size='small'>
              Agrément n° 59-2022-15
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
  display: flex;
  flex-direction: column;
`

const LogoContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  height: 30px;
  width: 30px;
`

const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2px;
`

const LogoTitle = styled.h3``

const LogoSubTitle = styled.h6`
  padding-left: 3px;
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
  a:link {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }

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
