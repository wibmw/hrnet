import { IEmployee } from '../pages/createEmployee/CreateEmployee'
import { departementOptions, statesOptions } from './localDatas'

// Timestamp for Created and Updated in database
export const timestamp = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).format(Date.now())
// Format correctly the employee datas before display it
export const formattedEmployee = (employee: IEmployee) => {
  employee.department = retrieveSelection(departementOptions, employee.department)
  employee.state = retrieveSelection(statesOptions, employee.state)
  employee.birthDate = dateFormat(employee.birthDate)
  employee.startDate = dateFormat(employee.startDate)
  return employee
}
// Retrieve Selected Data from Select
const retrieveSelection = (options: IOption[], value: string) => {
  const option = options?.find((option) => option?.value === value)
  return option ? option?.text : value
}
// Format Date for locale shape
const dateFormat = (date: string) => {
  const newDate = new Date(date)
  return date.includes('/') ? date : newDate.toLocaleDateString()
}

// Interfaces
interface IOption {
  value: string | null
  text: string | null
}
