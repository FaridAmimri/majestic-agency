/** @format */

import styled from 'styled-components'
import PriceCard from './PriceCard'

function Price() {
  return (
    <Container>
      <PriceCard price='14' type='FORMULE BASIC' total='67,20'>
        <Item>Domiciliation </Item>
        <Item>Mise à disposition du courrier</Item>
      </PriceCard>

      <PriceCard price='23' type='FORMULE PREMIUM' total='110,40'>
        <Item>Domiciliation </Item>
        <Item>Réexpédition du courrier</Item>
        <Item>Envoi numérique quotidien</Item>
      </PriceCard>
    </Container>
  )
}

export default Price

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Item = styled.li`
  margin: 10px 0;
  font-size: 18px;
`
