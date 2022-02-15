import React from 'react';
import { Link } from 'react-router-dom'

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
        <div className="Header">
           <h1 id='title'>SubHub</h1>
           <div className='pageLinks'>
                <Link id='home' to='/'><button id='home'>Home</button></Link>
                <Link id='newSub' to='/new'><button id='newSub'>Add Subscription</button></Link>
                <Link id='login' to='/login'><button id='login' onClick={handleClick}>Log out</button></Link>
           </div>
        </div>
    )
}

export default Header