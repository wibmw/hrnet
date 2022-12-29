import { GetEmployeesList } from '../../api/firebase'
import Table from '../../components/table/Table'

const CurrentEmployees = () => {
  const employeesList = GetEmployeesList()

  console.log(employeesList)
  return (
    <>
      {/** *********** Sign In Page ******************/}
      <main className='main main-bg'>
        <section className='form-content'>{employeesList && <Table employeesList={employeesList} />}</section>
      </main>
    </>
  )
}

export default CurrentEmployees
