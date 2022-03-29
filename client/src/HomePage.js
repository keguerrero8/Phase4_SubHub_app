import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Dashboard from './Dashboard';
import CalenderPage from './CalenderPage';
import SubscriptionPage from './SubscriptionPage';
import AllSubscriptions from './AllSubscriptions';

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

    function handleUpdateSubscription(updatedSubscription){
        setSubscriptions((subscriptions) =>
            subscriptions.map((subscription) => {
                return subscription.id === updatedSubscription.id ? updatedSubscription : subscription;
            })
        )
    }
    
    return (
        <>
            <Route exact path='/'>
                {subscriptions.length > 0 ? 
                    <Dashboard user={user} subscriptions={subscriptions} setSubscriptions={setSubscriptions} onDeleteSubscription={handleDeleteSub}/> : (
                <Box sx={{textAlign: "center", mt: "20px"}}>
                    <Typography sx={{mb: "5px"}} component="h1" variant="h3">Hello, {user.username}</Typography>
                    <Typography component="h2" variant="h5">You have no active subscriptions</Typography>
                </Box>
                )}
            </Route>
            <Route exact path='/subscriptions/:id'>
                <SubscriptionPage
                    onUpdateSubscription={handleUpdateSubscription} />
            </Route>
            <Route exact path='/calender'>
                <CalenderPage subscriptions={subscriptions}/>
            </Route>
            <Route exact path='/subscriptions'>
                <AllSubscriptions subscriptions={subscriptions} setSubscriptions={setSubscriptions} onDeleteSubscription={handleDeleteSub}/>
            </Route>           
        </>
    )
}

export default HomePage;