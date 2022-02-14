import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SignupForm() {
    const [credentials, setCredentials] = useState({
        username : "",
        password : "",
        password_confirmation : ""
    })
    
    function handleSubmit (e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((userData) => console.log(userData))
            }
            else {
                r.json().then((error) => console.log(error))
            }
        })
    };

    function handleChange (e) {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }
    
      return (
        <>
            <Typography component="h1" variant="h5">
            Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                variant="filled"
                onChange={handleChange}
                value={credentials.username}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                variant="filled"
                onChange={handleChange}
                value={credentials.password}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password_confirmation"
                label="Password Confirmation"
                id="password_confirmation"
                variant="filled"
                onChange={handleChange}
                value={credentials.password_confirmation}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            </Box>
        </>
      );
}

export default SignupForm;