import * as React from 'react';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import logo from "./logoWhite.png"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Kevin Guerero and Sarah Nosal {new Date().getFullYear()} {'.'}
    </Typography>
  );
}


function Login( { setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    function handleClick () {
        setShowLogin(!showLogin)
    }
    
    return (
        <Container component="main" maxWidth="xs" sx={{textAlign: "center"}}>
            <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                <Avatar src={logo} sx={{ bgcolor: "#074e7e", width: 56, height: 56 }}/>
                <Typography component="h1" variant="h4" sx={{mt: "10px", mb: "10px"}}>
                Welcome to SubHub
                </Typography>
                {showLogin ? <LoginForm setUser={setUser}/> : <SignupForm setUser={setUser}/>}
            </Box>
            <Divider/>
            <Typography component="h2" variant="h6" sx={{ mt: 4}}> 
            {showLogin ? "Don't have an account?": "Already have an account?"} 
            </Typography>
            <Button size="small" variant="contained" onClick={handleClick} sx={{ mt: 2, mb: 4 }}>
                {showLogin ? "Sign Up" : "Log In"} 
            </Button>
            <Copyright/>
        </Container>
    );
}

export default Login;