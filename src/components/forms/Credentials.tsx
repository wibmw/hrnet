import React, { ChangeEvent, useEffect, useState } from 'react'
import { emailCheck, passwordCheck } from '../../utils/formValidation'

const Credentials = () => {
  // Credentials Form datas
  const [credentialsFormState, setFormState] = useState({
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
    }),
    // Onchange, check and stock form datas in useState
    handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const name = target.name.includes('email') ? 'isEmailValid' : 'isPasswordValid'
      const isValid = target.name.includes('email') ? emailCheck(target) : passwordCheck(target)
      setFormState((prev) => ({ ...prev, [target.name]: target.value, [name]: isValid }))
    }

  return (
    <>
      {/** *********** Names Inputs ******************/}
      <div className='input-wrapper'>
        <label htmlFor='email'>Username</label>
        <input type='text' id='email' name='email' onChange={handleChange} />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' onChange={handleChange} />
      </div>
    </>
  )
}

export default Credentials
