/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import Animation from './Animation'
import FeatureIcon from '../assets/feature.png'
import PuzzledIcon from '../assets/puzzled.png'
import MessyIcon from '../assets/messy.png'
import DiscreetIcon from '../assets/discreet.png'

function Feature() {
  return (
    <Container id='feature'>
      <Left>
        <Image src={FeatureIcon} alt='Main avec smartphone' />
      </Left>
      <Right>
        <Title>
          <b>Gagnez</b> du temps grâce à notre domiciliation nouvelle génération
          et ses avantages exclusifs
        </Title>
        <Advantage>
          <Picto src={PuzzledIcon} alt='Femme perplexe' />
          <Item>
            <SubTitle>Ne perdez jamais votre courrier !</SubTitle>
            <Description>
              Avec Majestic domiciliation vos courriers sont tous réceptionnés,
              placés dans un espace sécurisé ou réexpédiés là où vous le
              désirez.
            </Description>
          </Item>
        </Advantage>
        <Advantage>
          <Picto src={MessyIcon} alt='Désordre papiers' />
          <Item>
            <SubTitle>Finissez-en avec la paperasse</SubTitle>
            <Description>
              Grâce à la numérisation et au stockage dropbox, ayez accès à tous
              vos courrier, sans vous déplacer et sans le papier.
            </Description>
          </Item>
        </Advantage>
        <Advantage>
          <Picto src={DiscreetIcon} alt='Avatar discret' />
          <Item>
            <SubTitle>Protégez votre vie privé</SubTitle>
            <Description>
              Posséder une adresse de domiciliation, c'est aussi une vraie
              sécurité à apporter à votre foyer.
            </Description>
          </Item>
        </Advantage>
        <Button variant='contained' size='medium' sx={{ width: '200px' }}>
          <a href='#contact'>En savoir plus</a>
        </Button>
      </Right>
      <Animation />
    </Container>
  )
}

export default Feature

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`

const Left = styled.div`
  width: 50%;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Image = styled.img`
  width: 40%;
  position: absolute;
  left: -1vw;
  top: 6vh;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    height: 85vh;
    justify-content: space-between;
    padding: 20px;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 85vh;
    justify-content: space-between;
    padding: 20px;
  }
`

const Title = styled.span`
  font-size: 25px;
  margin-bottom: 30px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 23px;
    margin-bottom: 25px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    margin: 0;
  }
`

const Advantage = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 480px) {
    margin: 0;
  }
`

const Picto = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
`

const SubTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 20px;
    margin: 10px 0;
  }
  @media only screen and (max-width: 480px) {
    font-size: 19px;
    margin-bottom: 10px;
  }
`

const Description = styled.span`
  font-size: 20px;
  font-style: italic;
  color: #777;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 19px;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`
