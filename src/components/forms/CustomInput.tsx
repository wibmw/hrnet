import { ChangeEvent } from 'react'
import InputWrapper, {IFormState } from './InputWrapper'
import { emptyCheck, inputCheck } from '../../utils/formValidation'



const CustomInput = ({ name, label, setFormState, regexp, message, type }: IPropsInputText) => {
  // OnChange, input value validation and set it in the Form State
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const name = target.name,
        isValidName = 'is' + name.charAt(0).toUpperCase() + name.slice(1) + 'Valid'
      setFormState((prev) => ({ ...prev, [name]: target.value, [isValidName]: type === 'text' ? inputCheck(target, regexp, message) : emptyCheck(target, message) }))
    }

  return (
    <>
      {/** *********** Custom Input ******************/}
      <InputWrapper name={name} label={label}>
        <input type={type} id={name} name={name} onChange={handleChange} />
      </InputWrapper>
    </>
  )
}

export default CustomInput

// Interfaces
interface IPropsInputText extends IFormState {
  regexp?: RegExp
  message: string
  type: string
}