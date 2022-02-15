import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import AddSub from './AddSub'
import Dashboard from './Dashboard';

function HomePage({user}) {
    const [subData, setSubData] = useState([])
    
    useEffect(() => {
        fetch('subscriptions')
        .then(r => r.json())
        .then(res => {
            setSubData(res)
        })
    }, [])

    return (
        <div>
                <Route exact path='/'>
                    <Dashboard subData={subData} user={user}/>
                </Route>
                {/* <Route exact path='/login'><Login/></Route> */}
                <Route exact path='/new'>
                    <AddSub subData={subData} setSubData={setSubData}/>
                </Route>
           
        </div>
    )
}

export default HomePage;