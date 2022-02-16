import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import AddSub from './AddSub'
import Subscription from './Subscription';


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

    const payments = subscriptions.map((subscription) => (
        subscription.monthly_price
    ))
    
    const sum = () => {
        let sum = 0
        for (let i = 0; i < payments.length; i++)
            sum += payments[i]
        return sum
    }
    
    const sumOfSubscriptions = sum()
    

    return (
        <div>
                <Route exact path='/'>
                    <h2>Hello {user.username}</h2>
                    {subscriptions.length > 0 ? (
                        subscriptions.map((subscription) => (
                            <Subscription key={subscription.id} 
                                onDeleteSubscription={handleDeleteSub}
                                subscription={subscription}
                            />
                        ))
                    ) : (
                        <>
                            <h2>You have no subscriptions</h2>
                        </>
                    )}
                    <h1 className='footer'>Total Monthly Spend: ${sumOfSubscriptions}</h1>
                </Route>
                {/* <Route exact path='/login'><Login/></Route> */}
                <Route exact path='/new'>
                    <AddSub subscriptions={subscriptions} setSubscriptions={setSubscriptions}/>
                </Route>
           
        </div>
    )
}

export default HomePage;