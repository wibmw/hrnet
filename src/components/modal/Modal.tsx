import { ReactNode } from 'react'

const Modal = ({ isOpen, toggle, children }: IPropsModal) => {
  return (
    <>
      {/** *********** Modal ******************/}
      {isOpen ? (
        <div className='modal-overlay' onClick={toggle}>
          {/** *********** Onclick on the overlay, the modal closes ******************/}
          <div onClick={(e) => e.stopPropagation()} className='modal-box'>
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal

// Interfaces
interface IPropsModal {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
}
