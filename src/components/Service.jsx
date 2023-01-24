/** @format */

import styled from 'styled-components'
import { moralData, physicalData } from '../data'
import MoralIcon from '../assets/moral.png'
import PhysicalIcon from '../assets/physical.png'

function Service() {
  return (
    <Container id='service'>
      <Header>Pour Qui ?</Header>
      <Wrapper>
        <Card>
          <TitleContainer>
            <Title>Personnes morales :</Title>
            <Icon src={MoralIcon} alt='Personne morale' />
          </TitleContainer>
          {moralData.map((item) => (
            <Item key={item.id}>
              <SubTitle>{item.subtitle}</SubTitle>
              <Description>{item.description}</Description>
            </Item>
          ))}
        </Card>

        <Card>
          <TitleContainer>
            <Title>Personnes physiques :</Title>
            <Icon src={PhysicalIcon} alt='Personne physique' />
          </TitleContainer>
          {physicalData.map((item) => (
            <Item key={item.id}>
              <SubTitle>{item.subtitle}</SubTitle>
              <Description>{item.description}</Description>
            </Item>
          ))}
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Service

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 10px;
  }
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`

const Header = styled.h1`
  text-align: center;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 22px;
    margin: 15px 0;
  }
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    margin: 15px 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    height: auto;
    padding-bottom: 0;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding-bottom: 0;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  height: 70px;
  width: 100px;
  margin-left: 80px;
`

const Title = styled.h2``

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`

const SubTitle = styled.h3``

const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #555;
`
