import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from './Modal'
import { Radio, RadioGroup, FormControlLabel, FormControl, Typography, Container, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import ModalPayment from './ModalPayment';

function SubscriptionPage({onUpdateSubscription}) {
    const params= useParams()
    const [subscription, setSubscription] = useState({})
    const [showPayModal, setShowPayModal] = useState(false)
    const [showMonthlyModal, setShowMonthlyModal] = useState(false)
    const [value, setValue] = useState("yes")
    const [formData, setFormData] = useState({
        payment_date: "",
        monthly_price: ""
    })
    
    useEffect(() => {
        fetch(`/subscriptions/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setSubscription(data)
            console.log(data)
        })
    }, [params])

    const handleRecurringChange = (event) => {
        setValue(event.target.value);
        fetch(`/subscriptions/${subscription.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({isRecurring: event.target.value === "yes" ? "true" : null})
        })
        .then(r => r.json())
        .then((sub) => onUpdateSubscription(sub))
    };


    function handleUpdateDate(event){
        event.preventDefault()
        fetch(`/subscriptions/${subscription.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({payment_date: formData.payment_date})
        })
        .then(r => r.json())
        .then((sub) => onUpdateSubscription(sub))
        
    }

    function handleUpdatePrice(event){
        event.preventDefault()
        fetch(`/subscriptions/${subscription.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({monthly_price: formData.monthly_price})
        })
        .then(r => r.json())
        .then((sub) => onUpdateSubscription(sub))
        
    }


    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]:value})

        console.log(formData)
    }


    return (
        <Container maxWidth="sm" sx={{textAlign: "center", mt: "40px"}}>
            <Card sx={{ maxWidth: 550 }}>
                <CardContent>
                    <Typography className='subTitle' component="h1" variant="h4">{subscription.name}</Typography>
                </CardContent>
                {subscription.name ? 
                <>
                <CardMedia
                    component="img"
                    height="300"
                    image={subscription.image_url}
                    alt={`${subscription.name} logo`}
                />        
                </> : 
                <CardContent>
                    <Typography className='subTitle' component="h1" variant="h4">Loading...</Typography>
                </CardContent>  
                }
                <CardContent>
                    <Box sx={{display: "flex", justifyContent: "center", mb: "25px"}}>
                        <Typography className='subDate' component="h2" variant="h6" sx={{mr: "15px"}}>Payment Date: {subscription.payment_date}</Typography>
                        <Button variant="contained" onClick={() => setShowPayModal(true)}>Update</Button>
                    </Box>
                    <Modal 
                        show={showPayModal} 
                        onSubmit={handleUpdateDate} 
                        setShow={setShowPayModal} 
                        onChange={handleChange}
                        formData={formData}
                    />
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Typography className='subPrice' component="h3" variant="h6" sx={{mr: "15px"}}>Monthly Price: ${subscription.monthly_price}</Typography>
                        <Button variant="contained" onClick={() => setShowMonthlyModal(true)}>Update</Button>
                    </Box>
                    <ModalPayment 
                        show={showMonthlyModal} 
                        onSubmit={handleUpdatePrice} 
                        setShow={setShowMonthlyModal} 
                        onChange={handleChange}
                        formData={formData}
                    />
                    <Box sx={{display: "flex", justifyContent: "center", mt: "20px", alignItems: "center"}}>
                        <Typography className='subPrice' component="h3" variant="h6" sx={{mr: "15px"}}>Recurring?</Typography>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleRecurringChange}
                                value={subscription.isRecurring === null ? "no" : value}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default SubscriptionPage
