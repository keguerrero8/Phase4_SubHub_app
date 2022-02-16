import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import AddSub from './AddSub'
import Dashboard from './Dashboard';

function HomePage({user}) {
    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        fetch('/subscriptions')
        .then(r => r.json())
        .then(res => {
            setSubscriptions(res)
        })
    }, [])


    function handleDeleteSub(deletedSubscription) {
        setSubscriptions((subscriptions) => 
            subscriptions.filter((subscription) => subscription.id !== deletedSubscription.id)
        )
    }
    

    return (
        <div>
                <Route exact path='/'>
                    {subscriptions.length > 0 ? 
                      <Dashboard user={user} subscriptions={subscriptions} onDeleteSubscription={handleDeleteSub}/> : (
                        <>
                            <h2>You have no subscriptions</h2>
                        </>
                    )}
                </Route>
                <Route exact path='/new'>
                    <AddSub subscriptions={subscriptions} setSubscriptions={setSubscriptions}/>
                </Route>
           
        </div>
    )
}

export default HomePage;