import { useState } from 'react'
import Input from '../../components/forms/InputText'
import DatePicker from '../../components/forms/DatePicker'
import Select from '../../components/forms/Select'
import { depatementOptions, statesOptions } from '../../utils/localDatas'

const CreateEmployee = () => {
  const [formState, setFormState] = useState<IForm>(),
    save = () => {
      Object.keys(formState).map(state => {
        console.log(state)
      })
      
    }

  return (
    <>
      {/** *********** Sign In Page ******************/}
      <main className='main main-bg'>
        <section className='form-content'>
          <h1>Create Employee</h1>
          {/** *********** Form ******************/}
          <form>
            {/** *********** Firstname Input ******************/}
            <Input name='firstName' label='First Name' setFormState={setFormState} />
            {/** *********** Lastname Input ******************/}
            <Input name='lastName' label='Last Name' setFormState={setFormState} />
            {/** *********** Birth's Date Picker ******************/}
            <DatePicker name='birthDate' label='Date of Birth' setFormState={setFormState} />
            {/** *********** Start Date Picker ******************/}
            <DatePicker name='startDate' label='Start Date' setFormState={setFormState} />
            <fieldset className='input-wrapper'>
              <legend>Address</legend>
              {/** *********** Street Input ******************/}
              <Input name='street' label='Street' setFormState={setFormState} />
              {/** *********** City Input ******************/}
              <Input name='city' label='City' setFormState={setFormState} />
              {/** *********** State Selelct ******************/}
              <Select name='state' label='State' options={statesOptions} setFormState={setFormState} />
              {/** *********** Zip Code Input ******************/}
              <Input name='zipCode' label='Zip Code' setFormState={setFormState} />
            </fieldset>
            {/** *********** Department Selelct ******************/}
            <Select name='department' label='Department' options={depatementOptions} setFormState={setFormState} />
            <br />
            {/** *********** Button ******************/}
            <div
              className='form-button'
              onClick={async () => {
                await save()
              }}
            >
              Save
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default CreateEmployee

export interface IForm {
  firstName: string | null
  lastName: string | null
  email: string | null
  password: string | null
  isFirstNameValid: boolean
  isLastNameValid: boolean
  isEmailValid: boolean
  isPasswordValid: boolean
}

export interface IOption {
  value: string | null
  text: string | null
}
