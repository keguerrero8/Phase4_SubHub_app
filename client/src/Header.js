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
            <img 
                className="header__logo"
                src={logo} 
                alt="logo"
            />
            <ul className="nav-menu">
                <Link id='home' to='/' className="nav-links">Home</Link>
                <Link id='newSub' to='/new' className="nav-links">Add Subscription</Link>
                <Link id='login' to='/' id="nav-links-button">
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