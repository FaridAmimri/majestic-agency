/** @format */

import styled from 'styled-components'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MapIcon from '../assets/map.png'
import PhoneIcon from '../assets/phone.png'
import SendIcon from '../assets/send.png'

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
          <Title>
            Des questions ?
            <br />
            Entrons en contact
          </Title>
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
            <Text>14 rue Alfred Dumont, 59140 Dunkerque</Text>
          </ContactItem>
          <ContactItem>
            <Icon src={PhoneIcon} />
            <Text>09 86 12 18 21</Text>
          </ContactItem>
          <ContactItem>
            <Icon src={SendIcon} />
            <Text>contact@majesticdom.fr</Text>
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
`

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FormContainer = styled.div`
  width: 50%;
  display: flex;
`

const Title = styled.h1`
  margin: 10px;
`

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContactContainer = styled.div`
  width: 50%;
`

const ContactItem = styled.div`
  display: flex;
  margin: 0 0 30px 80px;
`

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`

const Text = styled.span`
  font-size: 20px;
`
