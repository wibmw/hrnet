import { useGetEmployeesList } from '../../hook/useGetEmployeeList'
import Loading from '../../assets/images/loading.png'
import { Table } from '@wibmw/custom-table'

const CurrentEmployees = () => {
  // Retrieve Employees List
  const employeesList = useGetEmployeesList()

  return (
    <>
      {/** *********** Current Employees List Page ******************/}
      <main className='main main-bg'>
        <section className='table-content'>
          {employeesList.length ? (
            // If the employees List is loaded, display the Table
            <Table title='Employees List' tableDatas={employeesList} columns={columns} />
          ) : (
            // Else display the loading Gif
            <img src={Loading} alt='wait until the page loads' />
          )}
        </section>
      </main>
    </>
  )
}

// Table Columns List
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

export default CurrentEmployees
