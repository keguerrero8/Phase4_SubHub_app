import React from 'react'

function Modal({show, setShow, formData, onSubmit, onChange}){

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
                    <div className="modal-footer">
                        <button type="button" onClick={() => setShow(false)}>Cancel</button>
                        <button type="submit" onSubmit={onSubmit}>Update</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal;