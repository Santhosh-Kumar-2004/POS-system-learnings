import { Box, Typography, Button, TextField, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import foodImage from '../assets/food_image.jpg'

const Login2 = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f2f2f2',
                padding: 2,
            }}
        >
            <Paper
                elevation={6}
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                sx={{
                    width: { xs: '100%', sm: '95%', md: '85%' },
                    maxWidth: 1200,
                    display: 'flex',
                    borderRadius: 4,
                    overflow: 'hidden',
                }}
            >
                {/* Left Side - Image */}
                <Box
                    sx={{
                        flex: 1,
                        backgroundImage: `url(${foodImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: { xs: 'none', md: 'block' },
                    }}
                />

                {/* Right Side - Form */}
                <Box
                    sx={{
                        flex: 1,
                        padding: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    {/* Logo + Brand Title */}
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                        🍴 MyPOS
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4 }}>
                        Welcome back, admin. Please log in to continue.
                    </Typography>

                    {/* Login Form */}
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField label="Email" variant="outlined" fullWidth required />
                        <TextField label="Password" variant="outlined" type="password" fullWidth required />
                        <Button variant="contained" size="large" fullWidth>
                            Login
                        </Button>
                    </Box>

                    {/* Register Link */}
                    <Typography variant="body2" sx={{ mt: 3 }}>
                        Don't have an account?{' '}
                        <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>
                            Register
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default Login2
