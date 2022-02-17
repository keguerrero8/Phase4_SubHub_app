import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from './Modal'

function SubscriptionPage({onUpdateSubscription}) {
    const params= useParams()
    const [subscription, setSubscription] = useState({})
    const [show, setShow] = useState(false)
    const [formData, setFormData] = useState({
        payment_date: "",
        monthly_price: ""
    })

    useEffect(() => {
        fetch(`/subscriptions/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setSubscription(data)
            console.log(data)
        })
    }, [params])

    function handleUpdateDate(event){
        event.preventDefault()
        fetch(`/subscriptions/${subscription.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({payment_date: formData.payment_date})
        })
        .then(r => r.json())
        .then(
            
            console.log(formData))
        
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]:value})

        console.log(formData)
    }


    return (
        <div>
            <img src={subscription.image_url} alt='{subscription.name} logo' />
            <h1 className='subTitle'>{subscription.name}</h1>
            <h2 className='subDate'>Payment Date: {subscription.payment_date} </h2>
            <button onClick={() => setShow(true)}>Update </button>
            <Modal 
                show={show} 
                onSubmit={handleUpdateDate} 
                setShow={setShow} 
                onChange={handleChange}
                formData={formData}/>
            <h2 className='subPrice'>Monthly Price: ${subscription.monthly_price}</h2>

        </div>
    )
}

export default SubscriptionPage
