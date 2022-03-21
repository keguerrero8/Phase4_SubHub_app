import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom'

function Subscription({subscription, onDeleteSubscription}){
    const { id, name, image_url, payment_date, monthly_price, isRecurring} = subscription

    function handleDeleteSubscription(){
        fetch(`/subscriptions/${id}`,{
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                onDeleteSubscription(subscription)
            }
        })
    }
    return (

        <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            <Link to={`subscriptions/${id}`}>
                <Avatar src={image_url} />
                {name}
            </Link>
            </TableCell>
            <TableCell align="center">{monthly_price}</TableCell>
            <TableCell align="center">{payment_date}</TableCell>
            <TableCell align="center" >
                <IconButton aria-label="delete" onClick={handleDeleteSubscription}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>  
            <TableCell align="center">{isRecurring === "true" ? "yes" : "no"}</TableCell>  
        </TableRow>
    )
}

export default Subscription