import React from 'react'
import Box from '@material-ui/core/Box';

function Subscription({name, link, date, cost}){


    return (
        <div style={{ marginLeft: '10%', marginTop: '30px', width: '30%', marginBottom: '10%' }}>
            <Box color="black" bgcolor="whitesmoke" p={1.5}>
                <h2>{name}</h2>
                
                    <img className='image'src={link} alt='logo'/><br/>
                    <p className='date'>Payment Date: {date} of each month</p>
                    <p className='price'>Monthly Price: {cost}</p>
                
            </Box>
        </div>
       
    )
}

export default Subscription