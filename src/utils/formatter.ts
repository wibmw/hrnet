import { IEmployee } from '../pages/createEmployee/CreateEmployee'
import { departementOptions, statesOptions } from './localDatas'

// Format with thousands separator on number >= 1000
export const thousandsSeparator = (num: number) => {
  const numParts = num.toFixed(2).toString().split('.')
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return numParts.join('.')
}

// Return an expires date in milliseconds
export const expiresDate = (time: number) => {
  return new Date(new Date().getTime() + time * 60 * 60 * 1000)
}

export const timestamp = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).format(Date.now())

export const formattedEmployee = (employee: IEmployee) => {
  employee.department = retrieveSelection(departementOptions, employee.department)
  employee.state = retrieveSelection(statesOptions, employee.state)
  
  return employee
}

const retrieveSelection = (options: IOption[], value: string) => {
  const option = options?.find((option) => option?.value === value)
  return option?.text
}

interface IOption {
  value: string | null
  text: string | null
}
