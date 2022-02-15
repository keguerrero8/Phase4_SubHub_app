import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import AddSub from './AddSub'

function HomePage({user}) {
    const [subscriptions, setSubscriptions] = useState([])
    
    useEffect(() => {
        fetch('/subscriptions')
        .then(r => r.json())
        .then(res => {
            setSubscriptions(res)
            console.log(subscriptions)

        })
    }, [])

    return (
        <div>
                <Route exact path='/'>
                    <h2>Hello {user.username}</h2>
                    <h1 className='footer'>Total Monthly Spend: </h1>
                </Route>
                {/* <Route exact path='/login'><Login/></Route> */}
                <Route exact path='/new'>
                    <AddSub subscriptions={subscriptions} setSubscriptions={setSubscriptions}/>
                </Route>
           
        </div>
    )
}

export default HomePage;