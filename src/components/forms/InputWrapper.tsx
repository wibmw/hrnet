import React from 'react'
import { IForm } from '../../pages/createEmployee/CreateEmployee'



const InputWrapper = ({ name, label, children }: IPropsInputWrapper) => {

  return (
    <>
      {/** *********** Input ******************/}
      <div className='input-wrapper'>
        <label htmlFor={name}>{label}</label>
        {children && children}
      </div>
    </>
  )
}

export default InputWrapper

interface IInputLabel {
  name: string
  label: string
}

interface IPropsInputWrapper extends IInputLabel {
  children: JSX.Element
}

export interface IFormState extends IInputLabel {
  setFormState: React.Dispatch<React.SetStateAction<IForm>>
}