import { Route } from 'react-router-dom'
import React from 'react';

function HomePage() {

    return (
        <div className='HomePage'>
                <Route exact path='/'>
                    <h1 className='footer'>Total Monthly Spend: </h1>
                </Route>
                <Route exact path='/login'></Route>
                <Route exact path='/new'>

                </Route>
           
        </div>
    )
}

export default HomePage;