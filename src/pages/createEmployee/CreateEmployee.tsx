import { useState } from 'react'
import { departementOptions, statesOptions } from '../../utils/localDatas'

import { clearValidationMessage, setValidationMessage } from '../../utils/formValidation'
import { useNavigate } from 'react-router-dom'
import { createNewEmployee } from '../../api/firebase'
import { CustomModal } from '@wibmw/custom-modal'
import { CustomInput, CustomSelect, IForm } from '@wibmw/custom-form'

const CreateEmployee = () => {
  const navigate = useNavigate(),
    // Form Sate
    [formState, setFormState] = useState<IForm>(initForm),
    // Modal Open/Close toggle
    [isOpen, setisOpen] = useState(false),
    toggle = () => setisOpen(!isOpen),
    // Form Validation and Store in the database
    save = (event: React.MouseEvent) => {
      const fieldsNumber = Object.keys(formState).filter((fieldName) => fieldName.includes('Valid')).length,
        countValid = Object.values(formState).filter(Boolean).length / 2,
        element = event.target as HTMLInputElement

      if (fieldsNumber === countValid) {
        // If all fields are valid then create the employee and open the modal
        clearValidationMessage(element)
        createNewEmployee(formState)
        setisOpen(true)
      } else {
        // Else show an error message
        setValidationMessage(element, 'The form is not fullfilled correctly')
      }
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
            <CustomInput
              name='firstName'
              label='First Name'
              regexp={/^[a-zA-Zéèàçùê -]{2,50}$/}
              message='Invalid First Name !'
              setFormState={setFormState}
              type='text'
            />
            {/** *********** Lastname Input ******************/}
            <CustomInput
              name='lastName'
              label='Last Name'
              regexp={/^[a-zA-Zéèàçùê -]{2,50}$/}
              message='Invalid Last Name !'
              setFormState={setFormState}
              type='text'
            />
            {/** *********** Birth's Date Picker ******************/}
            <CustomInput
              name='birthDate'
              label='Date of Birth'
              message='Invalid Birth Date !'
              setFormState={setFormState}
              type='date'
            />
            {/** *********** Start Date Picker ******************/}
            <CustomInput
              name='startDate'
              label='Start Date'
              message='Invalid Start Date !'
              setFormState={setFormState}
              type='date'
            />
            <fieldset className='input-wrapper'>
              <legend>Address</legend>
              {/** *********** Street Input ******************/}
              <CustomInput
                name='street'
                label='Street'
                regexp={/^[a-zA-Z0-9éèàçùê, -]{2,120}$/}
                message='Invalid Street !'
                setFormState={setFormState}
                type='text'
              />
              {/** *********** City Input ******************/}
              <CustomInput
                name='city'
                label='City'
                regexp={/^[a-zA-Zéèàçùê -]{2,50}$/}
                message='Invalid City !'
                setFormState={setFormState}
                type='text'
              />
              {/** *********** State Selelct ******************/}
              <CustomSelect
                name='state'
                label='State'
                options={statesOptions}
                message='Invalid State !'
                setFormState={setFormState}
              />
              {/** *********** Zip Code Input ******************/}
              <CustomInput
                name='zipCode'
                label='Zip Code'
                regexp={/^[0-9]{4,5}$/}
                message='Invalid Zip Code !'
                setFormState={setFormState}
                type='text'
              />
            </fieldset>
            {/** *********** Department Selelct ******************/}
            <CustomSelect
              name='department'
              label='Department'
              options={departementOptions}
              message='Invalid Departement !'
              setFormState={setFormState}
            />
            <br />
            {/** *********** Button ******************/}
            <div className='input-wrapper'>
              <div
                className='form-button'
                onClick={async (e) => {
                  await save(e)
                }}
              >
                Save
              </div>
            </div>
          </form>
        </section>
        {/** *********** Modal ******************/}
        <CustomModal isOpen={isOpen} toggle={toggle}>
          <div>Employee Created Successfully !</div>
          <br />
          <div className='form-button' onClick={() => navigate('/employees-list')}>
            See Employee List
          </div>
        </CustomModal>
      </main>
    </>
  )
}

export default CreateEmployee

// Interfaces
export interface IEmployee {
  firstName: string | null
  lastName: string | null
  birthDate: string | null
  startDate: string | null
  street: string | null
  city: string | null
  state: string | null
  zipCode: string | null
  department: string | null
  createdAt?: string | null
  updatedAt?: string | null
}

export interface IForm extends Record<any, unknown> {
  id?: number
}


const initForm: IForm = {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '0',
  department: '',
  isFirstNameValid: false,
  isLastNameValid: false,
  isBirthDateValid: false,
  isStartDateValid: false,
  isStreetValid: false,
  isCityValid: false,
  isStateValid: false,
  isZipCodeValid: false,
  isDepartmentValid: false,
}
