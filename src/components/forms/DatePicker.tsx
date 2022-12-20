import { ChangeEvent } from 'react'
import InputWrapper, { IFormState } from './InputWrapper'
import { emptyCheck } from '../../utils/formValidation'

const DatePicker = ({ name, label, setFormState, message }: IPropsDatePicker) => {
  const date = new Date(),
    maxDate = date.setFullYear(date.getFullYear() + 1),
    handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const name = target.name,
        isValidName = 'is' + name.charAt(0).toUpperCase() + name.slice(1) + 'Valid'
      setFormState((prev) => ({ ...prev, [name]: target.value, [isValidName]: emptyCheck(target, message) }))
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

interface IPropsDatePicker extends IFormState {
  message: string
}