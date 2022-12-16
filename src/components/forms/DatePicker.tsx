import { IForm } from '../../pages/createEmployee/CreateEmployee'
import React, { ChangeEvent } from 'react'
import InputWrapper from './InputWrapper'

const DatePicker = (props: {
  name: string
  label: string
  setFormState: React.Dispatch<React.SetStateAction<IForm>>
}) => {
  const { name, label, setFormState } = props,
  date = new Date(),
  maxDate = date.setFullYear(date.getFullYear() + 1),
    handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const name = target.name,
        isValidName = 'is' + name.charAt(0).toUpperCase() + name.slice(1) + 'Valid'
      setFormState((prev) => ({ ...prev, [name]: target.value, [isValidName]: true }))
    }

  return (
    <>
      {/** *********** Input ******************/}
      <InputWrapper name={name} label={label}>
        <input type='date' id={name} name={name} onChange={handleChange} min={'1900-01-01'} max={maxDate} />
      </InputWrapper>
    </>
  )
}

export default DatePicker
