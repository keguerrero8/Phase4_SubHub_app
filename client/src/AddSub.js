import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddSub({subscriptions, setSubscriptions}){
    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        payment_date: "",
        monthly_price: "",
    })
    function handleSubmit(event){
        event.preventDefault()
        alert('Thank you for adding a subscription!')
        fetch('/subscriptions', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .then((newSub) => {
            setSubscriptions([newSub,...subscriptions])
        })

        console.log(formData)
    }
    function onChange(event){
        const key= event.target.name;
        const value = event.target.value;
        setFormData({...formData, [key]:value})
    }

    return (
        
        <Container maxWidth="xs" sx={{ textAlign: "center"}}>
            <h2 className='newSub'>Add New Subscription!</h2>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    onChange={onChange}
                    value={formData.name}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Link"
                    name="image_url"
                    variant="outlined"
                    onChange={onChange}
                    value={formData.image_url}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Payment Date"
                    name="payment_date"
                    variant="outlined"
                    onChange={onChange}
                    value={formData.payment_date}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Monthly Price"
                    name="monthly_price"
                    variant="outlined"
                    onChange={onChange}
                    value={formData.monthly_price}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
}

export default AddSub;