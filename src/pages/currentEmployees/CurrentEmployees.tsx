import { useGetEmployeesList } from '../../hook/useGetEmployeeList'
import Table from '../../components/table/Table'

const CurrentEmployees = () => {
  /* const employeesList = []
  Object.values(tableData).map((employee) => {
    employeesList.push(formattedEmployee(employee))
  }) */
  const employeesList = useGetEmployeesList()

  const columns = [
    { label: 'First Name', accessor: 'firstName', sortable: true, className: 'textLeft' },
    { label: 'Last Name', accessor: 'lastName', sortable: true, className: 'textLeft' },
    { label: 'Start Date', accessor: 'startDate', sortable: true, className: 'date' },
    { label: 'Department', accessor: 'department', sortable: true, className: 'textLeft' },
    { label: 'Date of Birth', accessor: 'birthDate', sortable: true, className: 'date' },
    { label: 'Street', accessor: 'street', sortable: false, className: 'textLeft' },
    { label: 'City', accessor: 'city', sortable: true, className: 'textLeft' },
    { label: 'State', accessor: 'state', sortable: true, className: 'textLeft' },
    { label: 'Zip Code', accessor: 'zipCode', sortable: true, className: 'textRight' },
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
