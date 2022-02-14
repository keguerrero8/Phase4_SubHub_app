import React, { useState } from 'react'

function AddSub({subData, setSubData}){
    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        payment_date: "",
        monthly_price: "",
    })
    function handleSubmit(event){
        event.preventDefault()
        alert('Thank you for adding a subscription!')
        // fetch('http://localhost:3000/subs', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(formData)
        // }).then(res => res.json())
        // .then((newSub) => {
        //     setSubData([newSub,...subData])
        // })

        console.log(formData)
    }
    function onChange(event){
        const key= event.target.name;
        const value = event.target.value;
        setFormData({...formData, [key]:value})
    }

    return (
        <div>
            <h2 className='newSub'>Add New Subscription!</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' name='name' value={formData.name} onChange={onChange}/>
                <label>Link:</label>
                <input type='text' name='image_url' value={formData.image_url} onChange={onChange}/>
                <label>Payment Date:</label>
                <input type='text' name='payment_date' value={formData.payment_date} onChange={onChange}/>
                <label>Monthly Price:</label>
                <input type='text' name='monthly_price' value={formData.monthly_price} onChange={onChange}/>

                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default AddSub;