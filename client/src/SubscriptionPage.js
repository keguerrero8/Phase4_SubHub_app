import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from './Modal'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function SubscriptionPage({onUpdateSubscription}) {
    const params= useParams()
    const [subscription, setSubscription] = useState({})
    const [show, setShow] = useState(false)
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
        .then(
            
            console.log(formData))
        
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]:value})

        console.log(formData)
    }


    return (
        // <div>
        //     <img src={subscription.image_url} alt='{subscription.name} logo' />
        //     <h1 className='subTitle'>{subscription.name}</h1>
        //     <h2 className='subDate'>Payment Date: {subscription.payment_date} </h2>
        //     <button onClick={() => setShow(true)}>Update </button>
        //     <Modal 
        //         show={show} 
        //         onSubmit={handleUpdateDate} 
        //         setShow={setShow} 
        //         onChange={handleChange}
        //         formData={formData}/>
        //     <h2 className='subPrice'>Monthly Price: ${subscription.monthly_price}</h2>

        // </div>
        <Container maxWidth="sm" sx={{textAlign: "center", mt: "40px"}}>
            <Card sx={{ maxWidth: 550 }}>
                <CardContent>
                    <Typography className='subTitle' component="h1" variant="h4">{subscription.name}</Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="300"
                    image={subscription.image_url}
                    alt={`${subscription.name} logo`}
                />
                <CardContent>
                    <Typography className='subDate' component="h2" variant="h6" sx={{mb: "10px"}}>Payment Date: {subscription.payment_date}</Typography>
                    <Button sx={{mb: "10px"}} variant="contained" onClick={() => setShow(true)}>Update Payment Date</Button>
                    <Modal 
                        show={show} 
                        onSubmit={handleUpdateDate} 
                        setShow={setShow} 
                        onChange={handleChange}
                        formData={formData}
                    />
                    <Typography sx={{mb: "10px"}} className='subPrice' component="h3" variant="h6">Monthly Price: ${subscription.monthly_price}</Typography>
                    <Button sx={{mb: "10px"}} variant="contained" onClick={() => setShow(true)}>Update Monthly Price</Button>
                </CardContent>
            </Card>
        </Container>
    )
}

export default SubscriptionPage
