import React from 'react'
import Box from '@material-ui/core/Box';

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
        <div style={{ marginLeft: '10%', marginTop: '30px', width: '30%', marginBottom: '10%' }}>
            <Box color="black" bgcolor="whitesmoke" p={1.5}>
                <button onClick={handleDeleteSubscription} id='delete'>Delete</button>
                <h2>{name}</h2>
                <img className='image'src={image_url} alt='logo'/><br/>
                <p className='date'>Payment Date: {payment_date} of each month</p>
                <p className='price'>Monthly Price: {monthly_price}</p>

                
            </Box>
        </div>
       
    )
}
export default Subscription