import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { motion } from 'framer-motion'

const MotionTextField = motion(TextField)
const MotionButton = motion(Button)

const LoginForm2 = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        width: '100%',
        maxWidth: 400,
      }}
    >
      <MotionTextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
      <MotionTextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
      <MotionButton
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Login
      </MotionButton>
    </Box>
  )
}

export default LoginForm2
