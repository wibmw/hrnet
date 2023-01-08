import { useGetEmployeesList } from '../../hook/useGetEmployeeList'
import Table from '../../components/table/Table'
import tableData from '../../tableData.json'
import { formattedEmployee } from '../../utils/formatter'

const CurrentEmployees = () => {
  const employeesList = []
  Object.values(tableData).map((employee) => {
    employeesList.push(formattedEmployee(employee))
  })

  const columns = [
    { label: 'First Name', accessor: 'firstName', sortable: true },
    { label: 'Last Name', accessor: 'lastName', sortable: true },
    { label: 'Start Date', accessor: 'startDate', sortable: true },
    { label: 'Department', accessor: 'department', sortable: true },
    { label: 'Date of Birth', accessor: 'birthDate', sortable: true },
    { label: 'Street', accessor: 'street', sortable: false },
    { label: 'City', accessor: 'city', sortable: true },
    { label: 'State', accessor: 'state', sortable: true },
    { label: 'Zip Code', accessor: 'zipCode', sortable: true },
  ]

  return (
    <>
      {/** *********** Sign In Page ******************/}
      <main className='main main-bg'>
        <section className='table-content'>
          {employeesList.length && <Table title='Employees List' tableDatas={employeesList} columns={columns} />}
        </section>
      </main>
    </>
  )
}

export default CurrentEmployees
