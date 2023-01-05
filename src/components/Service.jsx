/** @format */

import styled from 'styled-components'
import ServicePng from '../assets/service.png'
import JusticeIcon from '../assets/juriste.png'
import SupportIcon from '../assets/support.png'
import BoostIcon from '../assets/boost.png'

function Service() {
  return (
    <Container>
      <Left>
        <Image src={ServicePng} />
      </Left>
      <Right>
        <Header>Simplifiez-vous la vie</Header>
        <Wrapper>
          <Item>
            <Icon src={JusticeIcon}></Icon>
            <Content>
              <Title>Un juriste dédié</Title>
              <Description>
                Pour toutes vos formalités administratives et juridiques
              </Description>
            </Content>
          </Item>
          <Item>
            <Icon src={SupportIcon}></Icon>
            <Content>
              <Title>Accompagnement juridique</Title>
              <Description>
                Votre avocat disponible par téléphone ou whatsapp
              </Description>
            </Content>
          </Item>
          <Item>
            <Icon src={BoostIcon}></Icon>
            <Content>
              <Title>Boostez votre croissance</Title>
              <Description>
                Un accompagnement entrepreneurial pour accélérer votre
                croissance
              </Description>
            </Content>
          </Item>
        </Wrapper>
      </Right>
    </Container>
  )
}

export default Service

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    padding: 20px;
    height: 100%;
  }
`

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Image = styled.img`
  width: 100%;
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

const Header = styled.h1``

const Item = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  width: 50px;
  height: 50px;
`

const Content = styled.div`
  display: flex
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`

const Title = styled.h2``

const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`
