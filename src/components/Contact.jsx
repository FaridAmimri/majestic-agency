/** @format */

import styled from 'styled-components'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MapIcon from '../assets/map.png'
import PhoneIcon from '../assets/phone.png'
import SendIcon from '../assets/send.png'
import TimeIcon from '../assets/time.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState } from 'react'

function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit')
    emailjs
      .sendForm(
        'service_vjipffb',
        'template_rlelajz',
        formRef.current,
        'dxK4eOAw61JXwWe-i'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container id='contact'>
      <Wrapper>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' }
          }}
          noValidate
          autoComplete='off'
          ref={formRef}
        >
          <Title>Entrons en contact</Title>
          <FormContainer>
            <LeftForm>
              <TextField label='Nom' name='user_name' />
              <TextField label='Sujet' name='user_subject' />
              <TextField label='Email' name='user_email' />
            </LeftForm>
            <RightForm>
              <TextField label='Message' name='message' multiline rows={5} />
              <Button
                variant='contained'
                sx={{ margin: '8px' }}
                onClick={handleSubmit}
                color='success'
              >
                Envoyer
              </Button>
            </RightForm>
          </FormContainer>
          {done && (
            <Notification>Votre message a bien été envoyé.</Notification>
          )}
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
            <Text>De 9h à 12h et de 13h à 18h</Text>
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
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const FormContainer = styled.div`
  width: 60%;
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 90%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
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

  @media only screen and (max-width: 480px) {
    justify-content: inherit;
  }
`

const Notification = styled.p`
  margin: 10px;
  color: #2e7d32;

  @media only screen and (max-width: 480px) {
    margin: 0;
    text-align: center;
  }
`

const ContactContainer = styled.div`
  width: 40%;

  @media only screen and (max-width: 480px) {
    width: 70%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }
`

const ContactItem = styled.div`
  display: flex;
  margin: 30px 0 0 30px;

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
