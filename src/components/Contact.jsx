/** @format */

import styled from 'styled-components'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MapIcon from '../assets/map.png'
import PhoneIcon from '../assets/phone.png'
import SendIcon from '../assets/send.png'
import TimeIcon from '../assets/time.png'

function Contact() {
  return (
    <Container>
      <Wrapper>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete='off'
        >
          <Title>Entrons en contact</Title>
          <FormContainer>
            <LeftForm>
              <TextField label='Your Name' />
              <TextField label='Your Email' />
              <TextField label='Subject' />
            </LeftForm>
            <RightForm>
              <TextField label='Your Message' multiline rows={5} />
              <Button variant='contained' sx={{ margin: '8px' }}>
                Envoyer
              </Button>
            </RightForm>
          </FormContainer>
        </Box>

        <ContactContainer>
          <ContactItem>
            <Icon src={MapIcon} />
            <Text>13 rue Alfred Dumont, 59140 Dunkerque</Text>
          </ContactItem>
          <ContactItem>
            <Icon src={PhoneIcon} />
            <Text>09 86 12 18 21</Text>
          </ContactItem>
          <ContactItem>
            <Icon src={SendIcon} />
            <Text>contact@majesticdom.fr</Text>
          </ContactItem>
          <ContactItem>
            <Icon src={TimeIcon} />
            <Text>
              Ouvert du lundi au vendredi : <br /> De 9h à 12h et de 13h à 18h
            </Text>
          </ContactItem>
        </ContactContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  height: 90%;
  background-color: #d32f2f0a;
  padding-left: 40px;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: inherit;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 90%;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }
`

const FormContainer = styled.div`
  width: 50%;
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 90%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 90%;
  }
`

const Title = styled.h1`
  margin: 10px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    height: 50%;
    flex-direction: column;
  }
`

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContactContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 90%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }
`

const ContactItem = styled.div`
  display: flex;
  margin: 0 0 30px 80px;

  @media only screen and (max-width: 480px) {
    margin: 10px 0;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin: 8px 0;
  }
`

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`

const Text = styled.span`
  font-size: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`
