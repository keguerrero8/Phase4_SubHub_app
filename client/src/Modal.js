import React, { useState } from 'react'
import Button from '@mui/material/Button';

function Modal({show, setShow, formData, onSubmit, onChange}){
    const [showUpdate, setShowUpdate] = useState(false)

    function handleUpdateClick () {
        setShowUpdate(true)
    }

    function handleCancelClick () {
        setShowUpdate(false)
        setShow(false)
    }

    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form id='update date' onSubmit={onSubmit}>
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Payment Date</h4>
                    </div>
                    <div className="modal-body">
                        <input type='text' name='payment_date' placeholder='New Date' value={formData.payment_date} onChange={onChange}/>
                    </div>
                    {showUpdate ? <h4>Successfully updated!</h4> : null} 
                    <div className="modal-footer">
                        <Button sx={{margin: "15px"}}variant="contained" onClick={handleCancelClick}>Cancel</Button>
                        <Button type="submit" variant="contained" onClick={handleUpdateClick} onSubmit={onSubmit}>Update</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal;