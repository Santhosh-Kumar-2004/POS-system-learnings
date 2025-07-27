import { Box, Typography, Button } from '@mui/material'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'
import foodImage from '../assets/food_image.jpg'
import LoginForm2 from '../components/LoginForm2'
import LoginForm3 from '../components/LoginForm3'
import fireowenLogo from '../assets/rest_logo.jpg'

const Login = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* Left Side - Login Form */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 4 }}>
                {/* Logo + Title */}
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={fireowenLogo} alt="FireOwen Logo" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                    Fire Owen
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 4 }}>Welcome back, Admin!</Typography>

                {/* Login Form */}
                <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
                <LoginForm />

                {/* Register link */}
                <Typography variant="body2" sx={{ mt: 3 }}>
                    Don’t have an account?{' '}
                    <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>
                        Register
                    </Link>
                </Typography>
            </Box>

            {/* Right Side - Image */}
            <Box sx={{
                flex: 1,
                backgroundImage: `url(${foodImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: { xs: 'none', md: 'block' },
                transition: '0.6s ease',
            }} />
        </Box>
    )
}

export default Login
