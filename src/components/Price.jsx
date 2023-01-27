/** @format */

import styled from 'styled-components'
import PriceCard from './PriceCard'
import FormulaIcon from '../assets/formula.png'

function Price() {
  return (
    <Container id='price'>
      <Header>
        <Title>Formules:</Title>
      </Header>

      <CardContainer>
        <PriceCard
          price='14'
          period='€/mois'
          type='FORMULE BASIC'
          total='67,20 € TTC'
          action='Je souscris'
        >
          <Item>Domiciliation</Item>
          <Item>Mise à disposition du courrier</Item>
        </PriceCard>

        <PriceCard
          price='23'
          period='€/mois'
          type='FORMULE PREMIUM'
          total='110,40 € TTC'
          action='Je souscris'
        >
          <Item>Domiciliation</Item>
          <Item>Réexpédition du courrier</Item>
          <Item>Envoi numérique quotidien</Item>
        </PriceCard>

        <PriceCard
          icon={FormulaIcon}
          image='true'
          type='DEVIS PERSONNALISÉ'
          total='Gratuit'
          action='Demander un devis'
        >
          <Item>Un devis personnalisé en 1h</Item>
          <Item>Adapté à VOS besoins et VOTRE situation </Item>
          <Item>Servi à la demande</Item>
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
  margin-bottom: 20px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`

const Title = styled.h2`
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`

const Item = styled.li`
  margin: 10px 0;
  font-size: 18px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`
