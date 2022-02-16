import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Subscription from './Subscription';

function Dashboard({ user, subscriptions, onDeleteSubscription}) {

    return (
        <Container sx={{textAlign: "center"}}>
            <CssBaseline />
            <Box>
                <Typography component="h1" variant="h4">Hello, {user.username}</Typography>
            </Box>
            <TableContainer component={Paper} sx={{width: "70%", margin: "auto"}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
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
            <Typography className="footer" component="h2" variant="h3">Total Monthly Spend:</Typography>
        </Container>
    )
}

export default Dashboard