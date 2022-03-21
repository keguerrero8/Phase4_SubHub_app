import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';

function AddSub({subscriptions, setSubscriptions}){
    const [errors, setErrors] = useState(null);
    const [showUpdate, setShowUpdate] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        payment_date: "",
        monthly_price: "",
    })

    function handleSubmit(event){
        event.preventDefault()
        fetch('/subscriptions', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }).then(res => {
            if (res.ok) {
                res.json().then(newSub => setSubscriptions([newSub,...subscriptions]))
                setErrors(null)
                setShowUpdate(true)
            }
            else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }
    function onChange(event){
        const key= event.target.name;
        const value = event.target.value;
        setFormData({...formData, [key]:value})
    }

    return (
        
        <Box sx={{textAlign: "center"}}>
            <h2 className='newSub'>Add New Subscription</h2>
            {showUpdate ? <h4>Successfully added!</h4> : null}
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
                    fullWidth
                    label="Logo Image Link"
                    name="image_url"
                    variant="outlined"
                    onChange={onChange}
                    value={formData.image_url}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Payment Date in MM/DD/YYYY"
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
                {errors ? errors.map((e) => <Typography key={e} variant="subtitle1" component="h2" gutterBottom sx={{color: "red"}}>{e} </Typography>) : null}
            </Box>
        </Box>
    )
}

export default AddSub;