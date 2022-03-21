import React from 'react';
import { Link } from 'react-router-dom'
import "./index.css"
import logo from "./logoWhite.png"
import Button from '@mui/material/Button';

function Header({ setUser }) {

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
        <nav className="NavbarItems" >
            <Link to='/'>
                <img 
                    className="header__logo"
                    src={logo} 
                    alt="logo"
                />
            </Link>
            <ul className="nav-menu">
                <Link id='home' to='/' className="nav-links">Dashboard</Link>
                <Link to='/calender' className="nav-links">Calender</Link>
                <Link id="nav-links-button" to='/'>
                    <Button 
                        onClick={handleClick} 
                        variant="contained" 
                        color="success"
                    >
                        Log out
                    </Button>
                </Link>  
            </ul>
        </nav>
    )
}

export default Header