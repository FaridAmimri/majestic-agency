/** @format */

import styled from 'styled-components'
import PriceCard from './PriceCard'
import FormulaIcon from '../assets/formula.png'

function Price() {
  return (
    <Container id='price'>
      <Header>
        <Icon src={FormulaIcon} alt='Icône formule' />
        <Title>
          Formules : Un devis personnalisé en 1h adapté à VOS besoins et VOTRE
          situation
        </Title>
      </Header>

      <CardContainer>
        <PriceCard price='14' type='FORMULE BASIC' total='67,20'>
          <Item>Domiciliation </Item>
          <Item>Mise à disposition du courrier</Item>
        </PriceCard>

        <PriceCard price='23' type='FORMULE PREMIUM' total='110,40'>
          <Item>Domiciliation </Item>
          <Item>Réexpédition du courrier</Item>
          <Item>Envoi numérique quotidien</Item>
        </PriceCard>
      </CardContainer>
    </Container>
  )
}

export default Price

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h2``

const Icon = styled.img`
  width: 100px;
  height: 100px;
`

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Item = styled.li`
  margin: 10px 0;
  font-size: 18px;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`
