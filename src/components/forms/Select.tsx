import { ChangeEventHandler, useState } from 'react'
import InputWrapper, { IFormState } from './InputWrapper'
import { emptyCheck } from '../../utils/formValidation'

const Select = ({ name, label, options, message, setFormState }: IPropsSelect) => {
  const [selected, setSelected] = useState<string>(),
    // OnChange, selected value validation and set it in the Form State
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
      {/** *********** Select ******************/}
      <InputWrapper name={name} label={label}>
        <select id={name} name={name} value={selected} onChange={handleChange}>
          {/** *********** Create options from an Array ******************/}
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

// Interfaces
interface IPropsSelect extends IFormState {
  options: IOption[]
  message?: string
}

interface IOption {
  value: number | string | null
  text: string | null
}
