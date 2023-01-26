/** @format */

import { TextField } from '@mui/material'
// import styled from 'styled-components'

function Input({ name, label, value, onChange, error = null, ...other }) {
  // const CssTextField = styled(TextField)({
  //   '& label.Mui-focused': {
  //     color: 'white'
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: 'white'
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: 'white'
  //     }
  //   }
  // })
  return (
    <TextField
      className='muiTextField'
      color='primary'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export default Input
