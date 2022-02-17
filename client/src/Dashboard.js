import React, { useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Subscription from './Subscription';
import Chart from './Chart';
import Grid from '@mui/material/Grid';
import SummaryCard from './SummaryCard';
import { gsap } from "gsap";

function Dashboard({ user, subscriptions, onDeleteSubscription}) {
    const title = useRef()
    const card = useRef()
    const table = useRef()

    useEffect(() => {
        gsap.from(title.current, { opacity: 0, duration: 2})
        gsap.from(card.current, { opacity: 0, duration: 2})
        gsap.from(table.current, { opacity: 0, duration: 2})
    }, [])

    return (
        <Container maxWidth="md" sx={{textAlign: "center"}}>
            <CssBaseline />
            <Box sx={{mt: "20px"}} ref={title}>
                <Typography sx={{mb: "5px"}} component="h1" variant="h3">Hello, {user.username}</Typography>
                <Typography component="h2" variant="h5">Here is your monthly report</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Chart subscriptions={subscriptions}/>
                </Grid>
                <Grid item xs={6} sx={{margin: "auto"}} ref={card}>
                    <SummaryCard subscriptions={subscriptions} />
                </Grid>
            </Grid>
            <TableContainer component={Paper} sx={{width: "90%", mb: "50px"}} ref={table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Name</TableCell>
                            <TableCell align="right">Monthly Price ($)</TableCell>
                            <TableCell align="right">Payment Date</TableCell>
                            <TableCell align="right">Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {subscriptions.map((subscription) => <Subscription onDeleteSubscription={onDeleteSubscription} subscription={subscription} key={subscription.id}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Dashboard