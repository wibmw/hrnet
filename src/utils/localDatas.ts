// import Cookies from 'universal-cookie'
import { expiresDate } from './formatter'

// Return the stocked token from cookies
/* export const getLocalToken = () => {
  const cookie = new Cookies()
  return cookie.get('token')
}

// Put the new token in cookies
export const setLocalToken = (token: string, rememberMe: boolean) => {
  const cookie = new Cookies(),
    options = { path: '/', expires: expiresDate(rememberMe ? 395 * 24 : 0.5) }
  cookie.set('token', token, options)
}
*/
export const depatementOptions = [
  { value: '', text: '--Choose an option--' },
  { value: 'sales', text: 'Sales' },
  { value: 'marketing', text: 'Marketing' },
  { value: 'engineering', text: 'Engineering' },
  { value: 'humanResources', text: 'Human Resources' },
  { value: 'legal', text: 'Legal' },
]