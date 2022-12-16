import { IForm } from '../../pages/createEmployee/CreateEmployee'
import React, { ChangeEvent } from 'react'
import InputWrapper from './InputWrapper'

const InputText = (props: { name: string; label: string; setFormState: React.Dispatch<React.SetStateAction<IForm>> }) => {
  const { name, label, setFormState } = props,
    handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const name = target.name,
        isValidName = 'is' + name.charAt(0).toUpperCase() + name.slice(1) + 'Valid'
      setFormState((prev) => ({ ...prev, [name]: target.value, [isValidName]: true }))
    }

  return (
    <>
      {/** *********** Input ******************/}
      <InputWrapper name={name} label={label}>
        <input type='text' id={name} name={name} onChange={handleChange} />
      </InputWrapper>
    </>
  )
}

export default InputText
