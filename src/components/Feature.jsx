/** @format */

import styled from 'styled-components'
import FeatureIcon from '../assets/feature.png'
import Button from '@mui/material/Button'
import Animation from './Animation'

function Feature() {
  return (
    <Container>
      <Left>
        <Image src={FeatureIcon} />
      </Left>
      <Right>
        <Title>
          <b>Gagnez</b> en crédibilité
          <br />
          <b>Gagnez</b> en productivité
        </Title>
        <SubTitle>
          Une adresse prestigieuse à partir de 19€ HT. <br />
          Une gestion de votre courrier et l'accès rapide à tous documents triés
          et numérisés sur votre mobile.
        </SubTitle>
        <Description>
          Affranchissez vous des contraintes matérielles pour avoir un maximum
          de souplesse dans le dimensionnement de votre entreprise.
        </Description>
        <Description>
          Un accompagnement entrepreneurial pour accélérer votre croissance.
        </Description>
        <Button variant='contained' size='large' sx={{ width: '200px' }}>
          En savoir plus
        </Button>
      </Right>
      <Animation />
    </Container>
  )
}

export default Feature

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    padding: 30px;
  }
`

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Image = styled.img`
  width: 90%;
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 40px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
`

const Title = styled.span`
  font-size: 45px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin: 30px 0;
`

const Description = styled.span`
  font-size: 20px;
  color: #777;
  margin-bottom: 30px;
`
