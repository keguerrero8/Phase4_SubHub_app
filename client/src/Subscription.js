import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Subscription({subscription, onDeleteSubscription}){
    const { id, name, image_url, payment_date, monthly_price} = subscription

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
                <Avatar src={image_url} />
                {name}
            </TableCell>
            <TableCell align="right">{monthly_price}</TableCell>
            <TableCell align="right">{payment_date}</TableCell>
            <TableCell align="right" id="pliss">
                <IconButton aria-label="delete" onClick={handleDeleteSubscription}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>     
        </TableRow>
       
    )
}

export default Subscription