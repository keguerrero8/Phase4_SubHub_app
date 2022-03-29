import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import "./index.css"
import logo from "./logoWhite.png"
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, Typography, Menu, Container, IconButton, Avatar, Button, MenuItem } from "@mui/material";

function Header({ setUser }) {
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    function handleClick () {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Avatar sx={{mr: 3, display: { xs: 'none', md: 'flex' }}} alt="Subhub" src={logo}/>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center"><NavLink style={{color: "black", textDecoration: "none"}} to="/">Dashboard</NavLink></Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center"><NavLink style={{color: "black", textDecoration: "none"}} to="/calender">Calender</NavLink></Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center"><NavLink style={{color: "black", textDecoration: "none"}} to="/subscriptions">Subscriptions</NavLink></Typography>
                    </MenuItem>
                </Menu>
            </Box>
            <Typography
                variant="h6" 
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
                Subhub
            </Typography>
            {/* <Avatar sx={{flexGrow: 0, display: { xs: 'flex', md: 'none' }}} alt="Subhub" src={logo}/> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <NavLink style={{color: "white", textDecoration: "none"}} to="/">Dashboard</NavLink>
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <NavLink style={{color: "white", textDecoration: "none"}} to="/calender">Calender</NavLink>
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <NavLink style={{color: "white", textDecoration: "none"}} to="/subscriptions">Subscriptions</NavLink>
                </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <NavLink style={{color: "white", textDecoration: "none"}} to="/" onClick={handleClick}>Log out</NavLink>
                </Button>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    )
}

export default Header