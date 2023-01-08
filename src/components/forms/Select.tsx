import { IForm } from '../../pages/createEmployee/CreateEmployee'
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import InputWrapper, { IFormState } from './InputWrapper'
import { emptyCheck } from '../../utils/formValidation'

const Select = ({ name, label, options, message, setFormState }: IPropsSelect) => {
  const [selected, setSelected] = useState<string>(),
    handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
      const target = event.target,
        name = target.name,
        value = target.value,
        isValidName = 'is' + name.charAt(0).toUpperCase() + name.slice(1) + 'Valid'
      setSelected(value)
      setFormState((prev) => ({ ...prev, [name]: value, [isValidName]: emptyCheck(target, message) }))
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

interface IPropsSelect extends IFormState {
  options: IOption[]
  message?: string
}

interface IOption {
  value: number | string | null
  text: string | null
}
