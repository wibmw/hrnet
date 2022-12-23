import React, { ReactNode } from 'react'

const Modal = ({ isOpen, toggle, children }: IPropsModal) => {

    return (
        <>
            {isOpen && (
                <div className='modal-overlay' onClick={toggle}>
                    <div onClick={(e) => e.stopPropagation()} className='modal-box'>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal


interface IPropsModal {
    children?: ReactNode
    isOpen: boolean
    toggle: () => void
}