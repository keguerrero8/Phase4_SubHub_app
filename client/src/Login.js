import * as React from 'react';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Kevin Guerero and Sarah Nosal {new Date().getFullYear()} {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Login() {
    const [showLogin, setShowLogin] = useState(true);

    function handleClick () {
        setShowLogin(!showLogin)
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <LockOutlinedIcon />
                </Avatar>
                {showLogin ? <LoginForm /> : <SignupForm />}
            </Box>
            <Divider/>
            <Typography component="h2" variant="h6" sx={{ mt: 4}}> 
            {showLogin ? "Don't have an account?": "Already have an account?"} 
            </Typography>
            <Button variant="contained" onClick={handleClick} sx={{ mt: 2, mb: 4 }}>
                {showLogin ? "Sign Up" : "Log In"} 
            </Button>
            <Copyright/>
            </Container>
        </ThemeProvider>
    );
}

export default Login;