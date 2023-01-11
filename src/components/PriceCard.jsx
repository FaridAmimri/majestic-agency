/** @format */

import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function PriceCard({ price, type, total, children }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 380,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: ' 20px',
        margin: '10px'
      }}
    >
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <PriceContainer>
            <Price>{price}</Price>€/mois
          </PriceContainer>
          <PlanType>
            <Button variant='outlined' size='small' color='error'>
              {type}
            </Button>
          </PlanType>
          <List>{children}</List>
        </Typography>
        <Extra>Somme à verser à la signature : {total} € TTC</Extra>
      </CardContent>
      <CardActions>
        <Action>
          <Button variant='outlined' size='small'>
            <a href='#contact'> Je souscris</a>
          </Button>
        </Action>
      </CardActions>
    </Card>
  )
}

export default PriceCard

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;

  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 35px;
  }
`

const PlanType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

const List = styled.ul``

const Extra = styled.p`
  margin-top: 20px;
  font-size: 13px;
  font-weight: bold;
`

const Action = styled.div`
  margin-bottom: 20px;
`
