import { Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Modal } from '@mui/material';
import Dashboard from './Dashboard';
import CalenderPage from './CalenderPage';
import SubscriptionPage from './SubscriptionPage';
import AddSub from './AddSub';

function HomePage({user}) {
    const [subscriptions, setSubscriptions] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch('/subscriptions')
        .then(r => r.json())
        .then(res => {
            setSubscriptions(res)
        })
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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
                    <Button sx={{my: "30px"}} onClick={handleOpen} variant="contained">Add Subscription</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                        <AddSub subscriptions={subscriptions} setSubscriptions={setSubscriptions}/>
                        <Button onClick={handleClose} sx={{position: "absolute", right: "0px"}}>CLOSE</Button>
                        </Box>
                    </Modal>
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
        </>
    )
}

export default HomePage;