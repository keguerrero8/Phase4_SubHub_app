import React, { useState } from 'react'
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal } from '@mui/material';
import AddSub from './AddSub';
import Subscription from './Subscription';

function AllSubscriptions({subscriptions, setSubscriptions, onDeleteSubscription}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70vw",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    

    return (
        <Box sx={{textAlign: "center", my: "40px", width: "100vw"}}>
            <Typography variant="h4">Manage your subscriptions</Typography>
            <Button sx={{my: "40px"}} onClick={handleOpen} variant="contained">Add Subscription</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                <AddSub subscriptions={subscriptions} setSubscriptions={setSubscriptions}/>
                <Button onClick={handleClose} sx={{position: "absolute", right: "0px"}}>CLOSE</Button>
                </Box>
            </Modal>
            <TableContainer component={Paper} sx={{width: "90%", margin: "auto"}} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Name</TableCell>
                            <TableCell align="center">Monthly Price ($)</TableCell>
                            <TableCell align="center">Start Payment Date</TableCell>
                            <TableCell align="center">Delete?</TableCell>
                            <TableCell align="center">Recurring?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {subscriptions.map((subscription) => <Subscription onDeleteSubscription={onDeleteSubscription} subscription={subscription} key={subscription.id}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AllSubscriptions;