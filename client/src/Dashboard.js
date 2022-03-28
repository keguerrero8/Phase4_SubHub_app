import React, { useRef, useState, useEffect } from 'react';
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal } from '@mui/material';
import Subscription from './Subscription';
import Chart from './Chart';
import SummaryCard from './SummaryCard';
import AddSub from './AddSub';
import { gsap } from "gsap";
import "./index.css"

function Dashboard({ user, subscriptions, onDeleteSubscription, setSubscriptions}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const title = useRef()
    const table = useRef()

    useEffect(() => {
        gsap.from(title.current, { opacity: 0, duration: 2})
        gsap.from(table.current, { opacity: 0, duration: 2})
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

    return (
        <Box sx={{textAlign: "center", width: "95%", height: "100%", margin: "30px auto"}}>
            <Box sx={{my: "25px"}} ref={title}>
                <Typography sx={{mb: "5px", fontSize: "6.0vw"}} component="h1" variant="h3">Welcome back, {user.username}</Typography>
                {/* <Typography sx={{mb: "5px", fontSize: "6.0vw"}} component="h1" variant="h3">Welcome back, {user.username}</Typography> */}
            </Box>
            <SummaryCard subscriptions={subscriptions} />
            <Chart subscriptions={subscriptions}/>
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
            <TableContainer component={Paper} sx={{width: "90%", margin: "auto"}} ref={table}>
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

export default Dashboard