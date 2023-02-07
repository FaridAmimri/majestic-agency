/** @format */

import styled from 'styled-components'
import { moralData, physicalData } from '../data'
import MoralIcon from '../assets/moral.png'
import PhysicalIcon from '../assets/physical.png'

function Service() {
  return (
    <Container id='service'>
      <Header>POUR QUI ?</Header>
      <Wrapper>
        <Card className='CardTop'>
          <Left>
            <Title>PERSONNES MORALES</Title>
            <Icon src={MoralIcon} alt='Personne morale' />
          </Left>
          <Right>
            {moralData.map((item) => (
              <Item key={item.id}>
                <SubTitle>{item.subtitle}</SubTitle>
                <Description>{item.description}</Description>
              </Item>
            ))}
          </Right>
        </Card>

        <Card className='CardBottom'>
          <Left>
            <Title>PERSONNES PHYSIQUES</Title>
            <Icon src={PhysicalIcon} alt='Personne physique' />
          </Left>
          <Right>
            {physicalData.map((item) => (
              <Item key={item.id}>
                <SubTitle>{item.subtitle}</SubTitle>
                <Description>{item.description}</Description>
              </Item>
            ))}
          </Right>
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
`

const Header = styled.h1`
  text-align: center;
  margin: 15px 0;
  color: #79aac2;

  @media only screen and (min-width: 1440px) {
    margin: 30px 0;
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .CardTop {
    background-color: #79aac2;
    color: white;
    img {
      height: 200px;
      width: 300px;
    }
  }
  .CardBottom {
    flex-direction: row-reverse;
    color: #79aac2;
    img {
      height: 250px;
      width: 250px;
      margin-top: 10px;
    }

    @media only screen and (min-width: 481px) and (max-width: 1024px) {
      flex-direction: column;
    }
    @media only screen and (max-width: 480px) {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Card = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  padding: 25px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`

const Icon = styled.img`
  height: 200px;
  width: 250px;
`

const Title = styled.h2``

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`

const SubTitle = styled.h3``

const Description = styled.p`
  font-size: 16px;
  margin-top: 5px;
`
