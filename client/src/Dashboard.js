import React from 'react';
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

function Dashboard({ user, subscriptions, onDeleteSubscription}) {

    return (
        <Container maxWidth="md" sx={{textAlign: "center"}}>
            <CssBaseline />
            <Box sx={{mt: "20px"}}>
                <Typography sx={{mb: "5px"}} component="h1" variant="h3">Hello, {user.username}</Typography>
                <Typography component="h2" variant="h5">Here is your monthly report</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Chart subscriptions={subscriptions}/>
                </Grid>
                <Grid item xs={6} sx={{margin: "auto"}}>
                <SummaryCard subscriptions={subscriptions}/>
                </Grid>
            </Grid>
            <TableContainer component={Paper} sx={{width: "90%", mb: "50px"}}>
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