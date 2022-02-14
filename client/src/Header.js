import React from 'react';
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className="Header">
           <h1 id='title'>SubHub</h1>
           <div className='pageLinks'>
                <Link id='login' to='/login'><button id='login'>Login</button></Link>
                <Link id='home' to='/'><button id='home'>Home</button></Link>
                <Link id='newSub' to='/new'><button id='newSub'>Add Subscription</button></Link>
           </div>
        </div>
    )
}

export default Header