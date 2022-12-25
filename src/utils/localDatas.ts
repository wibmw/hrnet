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

export const handleSaveToPC = (jsonData, filename) => {
  const fileData = JSON.stringify(jsonData)
  const blob = new Blob([fileData], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = `${filename}.json`
  link.href = url
  link.click()
}

export const depatementOptions = [
  { value: '', text: '--Choose an option--' },
  { value: 'sales', text: 'Sales' },
  { value: 'marketing', text: 'Marketing' },
  { value: 'engineering', text: 'Engineering' },
  { value: 'humanResources', text: 'Human Resources' },
  { value: 'legal', text: 'Legal' },
]

export const statesOptions = [
  { value: '', text: '--Choose an option--' },
  { text: 'Alabama', value: 'AL' },
  { text: 'Alaska', value: 'AK' },
  { text: 'American Samoa', value: 'AS' },
  { text: 'Arizona', value: 'AZ' },
  { text: 'Arkansas', value: 'AR' },
  { text: 'California', value: 'CA' },
  { text: 'Colorado', value: 'CO' },
  { text: 'Connecticut', value: 'CT' },
  { text: 'Delaware', value: 'DE' },
  { text: 'District Of Columbia', value: 'DC' },
  { text: 'Federated States Of Micronesia', value: 'FM' },
  { text: 'Florida', value: 'FL' },
  { text: 'Georgia', value: 'GA' },
  { text: 'Guam', value: 'GU' },
  { text: 'Hawaii', value: 'HI' },
  { text: 'Idaho', value: 'ID' },
  { text: 'Illinois', value: 'IL' },
  { text: 'Indiana', value: 'IN' },
  { text: 'Iowa', value: 'IA' },
  { text: 'Kansas', value: 'KS' },
  { text: 'Kentucky', value: 'KY' },
  { text: 'Louisiana', value: 'LA' },
  { text: 'Maine', value: 'ME' },
  { text: 'Marshall Islands', value: 'MH' },
  { text: 'Maryland', value: 'MD' },
  { text: 'Massachusetts', value: 'MA' },
  { text: 'Michigan', value: 'MI' },
  { text: 'Minnesota', value: 'MN' },
  { text: 'Mississippi', value: 'MS' },
  { text: 'Missouri', value: 'MO' },
  { text: 'Montana', value: 'MT' },
  { text: 'Nebraska', value: 'NE' },
  { text: 'Nevada', value: 'NV' },
  { text: 'New Hampshire', value: 'NH' },
  { text: 'New Jersey', value: 'NJ' },
  { text: 'New Mexico', value: 'NM' },
  { text: 'New York', value: 'NY' },
  { text: 'North Carolina', value: 'NC' },
  { text: 'North Dakota', value: 'ND' },
  { text: 'Northern Mariana Islands', value: 'MP' },
  { text: 'Ohio', value: 'OH' },
  { text: 'Oklahoma', value: 'OK' },
  { text: 'Oregon', value: 'OR' },
  { text: 'Palau', value: 'PW' },
  { text: 'Pennsylvania', value: 'PA' },
  { text: 'Puerto Rico', value: 'PR' },
  { text: 'Rhode Island', value: 'RI' },
  { text: 'South Carolina', value: 'SC' },
  { text: 'South Dakota', value: 'SD' },
  { text: 'Tennessee', value: 'TN' },
  { text: 'Texas', value: 'TX' },
  { text: 'Utah', value: 'UT' },
  { text: 'Vermont', value: 'VT' },
  { text: 'Virgin Islands', value: 'VI' },
  { text: 'Virginia', value: 'VA' },
  { text: 'Washington', value: 'WA' },
  { text: 'West Virginia', value: 'WV' },
  { text: 'Wisconsin', value: 'WI' },
  { text: 'Wyoming', value: 'WY' },
]
