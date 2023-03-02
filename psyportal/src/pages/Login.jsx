import React from 'react'
import '../styles/Login.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
  return (
    <div className='loginPage' >
        <h1>Login</h1>

        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 }
      }}
    >
      <TextField
        helperText="Please enter your User Name"
        id="demo-helper-text-aligned"
        label="User Name"
      />
      <TextField
        helperText="Please enter your Password"
        id="demo-helper-text-aligned-no-helper"
        label="Password"
        type="password"
      />
    </Box>

    <Button variant="contained"sx={{ padding: 1, margin: 1 }}>Login</Button>
    <Button variant="contained"sx={{ padding: 1, margin: 1 }}>Sign up</Button>
    </div>
  )
}

export default Login