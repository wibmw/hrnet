import { IForm, IOption } from '../../pages/createEmployee/CreateEmployee'
import React, { ChangeEvent, useState } from 'react'
import InputWrapper from './InputWrapper'

const Select = (props: {
  name: string
  label: string
  options: IOption []
  setFormState: React.Dispatch<React.SetStateAction<IForm>>
}) => {
  const { name, label, options, setFormState } = props,
    [selected, setSelected] = useState(),
    handleChange = (event) => {
      const name = event.target.name,
        isValidName = 'is' + name.charAt(0).toUpperCase() + name.slice(1) + 'Valid'
      setSelected(event.target.value)
      setFormState((prev) => ({ ...prev, [name]: event.target.value, [isValidName]: true }))
    }

  return (
    <>
      {/** *********** Input ******************/}
      <InputWrapper name={name} label={label}>
        <select id={name} name={name} value={selected} onChange={handleChange}>
          {options.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.text}
            </option>
          ))}
        </select>
      </InputWrapper>
    </>
  )
}

export default Select
