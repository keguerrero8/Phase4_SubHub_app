import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function AddSub({subscriptions, setSubscriptions}){
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState(null);
    const handleClose = () => setOpen(false);

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
                setOpen(true)
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
                    // onClick={handleOpen}
                >
                    Submit
                </Button>
                {errors ? errors.map((e) => <Typography key={e} variant="subtitle1" component="h2" gutterBottom sx={{color: "red"}}>{e} </Typography>) : null}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Subscription Added!
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </Container>
    )
}

export default AddSub;