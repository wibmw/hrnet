import { GetEmployeesList } from '../../api/firebase'
import Table from '../../components/table/Table'

const { Head: Header, Body } = Table

const CurrentEmployees = () => {
  const employeesList = GetEmployeesList()

  console.log(employeesList)
  return (
    <>
      {/** *********** Sign In Page ******************/}
      <main className='main main-bg'>
        <section className='table-content'>
          {employeesList && (
            <Table employeesList={employeesList} isAutomatic={false}>
              <Header>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Start Date</td>
                <td>Department</td>
                <td>Date of Birth</td>
                <td>Street</td>
                <td>City</td>
                <td>State</td>
                <td>Zip Code</td>
              </Header>
              <Body>
                {employeesList.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.birthDate}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state}</td>
                    <td>{employee.zipCode}</td>
                  </tr>
                ))}
              </Body>
            </Table>
          )}
        </section>
      </main>
    </>
  )
}

export default CurrentEmployees
