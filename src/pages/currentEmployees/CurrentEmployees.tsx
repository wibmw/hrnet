import { GetEmployeesList } from '../../api/firebase'

const CurrentEmployees = () => {
  const employeesList = GetEmployeesList()

  return (
    <>
      {/** *********** Sign In Page ******************/}
      <main className='main main-bg'>
        <section className='form-content'></section>
      </main>
    </>
  )
}

export default CurrentEmployees
