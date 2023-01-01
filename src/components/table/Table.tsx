import { IEmployee } from '../../pages/createEmployee/CreateEmployee'

const Table = ({ employeesList, isAutomatic, children }: IPropsTable) => {
  return (
    employeesList.length && (
      <table>
        <thead>
          <tr key={'header'}>
            {isAutomatic
              ? Object.keys(employeesList[0]).map((headerName, index) => <th key={index}>{headerName}</th>)
              : children[0]}
          </tr>
        </thead>
        <tbody>
          {isAutomatic
            ? employeesList.map((employee, index) => (
                <tr key={index}>
                  {Object.values(employee).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))
            : children[1]}
        </tbody>
      </table>
    )
  )
}

Table.Head = ({ children }) => children
Table.Body = ({ children }) => children

export default Table

interface IPropsTable extends IChildren {
  employeesList: IEmployee[]
  isAutomatic: boolean
}

interface IChildren {
  children?: JSX.Element[]
}
