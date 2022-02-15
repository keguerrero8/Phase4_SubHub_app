import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import AddSub from './AddSub'
import Login from './Login'

function HomePage() {
    const [subData, setSubData] = useState([])
    
    // useEffect(() => {
    //     fetch('/subscriptions')
    //     .then(r => r.json())
    //     .then(r => {
    //         setSubData(r)
    //         console.log(subData)
    //     },[])
    // })
    return (
        <div>
                <Route exact path='/'>
                    <h1 className='footer'>Total Monthly Spend: </h1>
                </Route>
                {/* <Route exact path='/login'><Login/></Route> */}
                <Route exact path='/new'>
                    <AddSub subData={subData} setSubData={setSubData}/>
                </Route>
           
        </div>
    )
}

export default HomePage;