/** @format */

import styled from 'styled-components'
import Box from '@mui/material/Box'
import Input from './Input'
import Button from '@mui/material/Button'
import MapIcon from '../assets/map.png'
import PhoneIcon from '../assets/phone.png'
import SendIcon from '../assets/send.png'
import ClockIcon from '../assets/clock.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: ''
}

function Contact() {
  const formRef = useRef()

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const validate = () => {
    let temp = {}
    const regexEmail = /\S+@\S+\.\S+/

    temp.name = values.name ? '' : 'Entrer un nom'
    temp.subject = values.subject ? '' : 'Entrer un sujet'
    temp.email = regexEmail.test(values.email) ? '' : 'Entrer un email correct'
    temp.message = values.message ? '' : 'Entrer un message'
    setErrors({ ...temp })
    return Object.values(temp).every((x) => x === '')
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setLoading(true)
      emailjs
        .sendForm(
          'service_5ubwg4q',
          'template_qdtmkgw',
          formRef.current,
          'dxK4eOAw61JXwWe-i'
        )
        .then(
          (result) => {
            console.log(result.text)
            resetForm()
            setLoading(false)
            setSuccess(true)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
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
              <Input
                label='Nom'
                name='name'
                value={values.name}
                error={errors.name}
                onChange={handleInputChange}
              />
              <Input
                label='Sujet'
                name='subject'
                value={values.subject}
                error={errors.subject}
                onChange={handleInputChange}
              />
              <Input
                label='Email'
                name='email'
                value={values.email}
                error={errors.email}
                onChange={handleInputChange}
              />
            </LeftForm>
            <RightForm>
              <Input
                label='Message'
                name='message'
                multiline
                rows={5}
                value={values.message}
                error={errors.message}
                onChange={handleInputChange}
              />
              <Button
                variant='outlined'
                sx={{ margin: '8px' }}
                onClick={handleSubmit}
              >
                Envoyer
              </Button>
            </RightForm>
          </FormContainer>
          {loading && (
            <LoaderContainer>
              <CircularProgress color='primary' />
            </LoaderContainer>
          )}
          {success && (
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
            <Icon src={ClockIcon} />
            <Text>Ouvert de 9h à 12h et de 13h à 18h</Text>
          </ContactItem>
        </ContactContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  min-height: 90vh;
  background-color: #ff912463;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 40px;
  color: white;

  @media only screen and (min-width: 1440px) {
    min-height: 400px;
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 0;
  }
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const FormContainer = styled.div`
  width: 60%;
  display: flex;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    height: 90%;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 90%;
  }
`

const Title = styled.h1`
  color: #1976d2;
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

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Notification = styled.p`
  margin: 10px;
  color: #1976d2;

  @media only screen and (max-width: 480px) {
    margin: 0;
    text-align: center;
  }
`

const ContactContainer = styled.div`
  width: 40%;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 80%;
    margin: 10px;
  }
  @media only screen and (max-width: 480px) {
    width: 90%;
    margin: 10px;
  }
`

const ContactItem = styled.div`
  display: flex;
  margin: 30px 0 0 30px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 8px 0;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 480px) {
    margin: 10px 0;
    display: flex;
    justify-content: center;
  }
`

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;

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
