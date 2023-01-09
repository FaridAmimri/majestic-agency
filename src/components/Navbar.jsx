/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LogoIcon from '../assets/logo.png'

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
            {/* <Title>Majestic</Title>
            <Subtitle>Domiciliation</Subtitle> */}
            <Logo src={LogoIcon}></Logo>
          </LogoContainer>
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
  flex-direction: column;
`

// const Title = styled.h2`
//   width: 100px;
//   text-align: center;
// `

// const Subtitle = styled.h6`
//   width: 100px;
//   text-align: center;
//   font-size: 10px;
//   color: gray;
// `

const Logo = styled.img`
  height: 50px;
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
