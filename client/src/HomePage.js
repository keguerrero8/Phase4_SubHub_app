import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import AddSub from './AddSub'
import Dashboard from './Dashboard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SubscriptionPage from './SubscriptionPage';

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
                    <Dashboard user={user} subscriptions={subscriptions} onDeleteSubscription={handleDeleteSub}/> : (
                <Box sx={{textAlign: "center", mt: "20px"}}>
                    <Typography sx={{mb: "5px"}} component="h1" variant="h3">Hello, {user.username}</Typography>
                    <Typography component="h2" variant="h5">You have no active subscriptions</Typography>
                </Box>
                )}
            </Route>
            <Route exact path='/new'>
                <AddSub subscriptions={subscriptions} setSubscriptions={setSubscriptions}/>
            </Route>
            <Route exact path='/subscriptions/:id'>
                <SubscriptionPage
                    onUpdateSubscription={handleUpdateSubscription} />
            </Route>      
        </>
    )
}

export default HomePage;