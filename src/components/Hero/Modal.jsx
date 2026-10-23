import React from 'react'

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className='model-overlay' onClick={onClose}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <div>{children}</div>
                <button onClick={onClose}>Bağla</button>
            </div>

        </div>
    )
}

export default Modal
