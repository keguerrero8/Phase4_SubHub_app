import React from 'react'
import Button from '@mui/material/Button';

function ModalPayment({show, setShow, formData, onSubmit, onChange}){

    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form id='update price' onSubmit={onSubmit}>
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Monthly Price</h4>
                    </div>
                    <div className="modal-body">
                        <input type='text' name='monthly_price' placeholder='New Price' value={formData.monthly_price} onChange={onChange}/>
                    </div>
                    <div className="modal-footer">
                        <Button sx={{margin: "15px"}}variant="contained" onClick={() => setShow(false)}>Cancel</Button>
                        <Button type="submit" variant="contained" onSubmit={onSubmit}>Update</Button>
                        {/* <button type="button" onClick={() => setShow(false)}>Cancel</button>
                        <button type="submit" onSubmit={onSubmit}>Update</button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ModalPayment;