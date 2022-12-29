import { IEmployee } from '../../pages/createEmployee/CreateEmployee'

const Table = ({ employeesList }: IPropsTable) => {
  return (
    employeesList.length && (
      <table>
        <thead>
          <tr key={'header'}>
            {Object.keys(employeesList[0]).map((headerName, index) => (
              <th key={index}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employeesList.map((employee, index) => (
            <tr key={index}>
              {Object.values(employee).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  )
}

export default Table

interface IPropsTable {
  employeesList: IEmployee[]
}
