import { ChangeEvent } from 'react'
import InputWrapper, {IFormState } from './InputWrapper'
import { inputCheck } from '../../utils/formValidation'

interface IPropsInputText extends IFormState {
  regexp: RegExp
  message: string
}

const InputText = ({ name, label, setFormState, regexp, message }: IPropsInputText) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const name = target.name,
        isValidName = 'is' + name.charAt(0).toUpperCase() + name.slice(1) + 'Valid'
      setFormState((prev) => ({ ...prev, [name]: target.value, [isValidName]: inputCheck(target, regexp, message) }))
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
