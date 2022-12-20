//* ******************** DISPLAY MESSAGES  ***********************************/
// clear validation message
export const clearValidationMessage = (element: HTMLElement): void => {
  element?.setAttribute('data-error-visible', 'false')
  element.closest('.input-wrapper')?.setAttribute('data-error', '')
}

// set validation message
export const setValidationMessage = (element: HTMLElement, message: string): void => {
  element?.setAttribute('data-error-visible', 'true')
  element.closest('.input-wrapper')?.setAttribute('data-error', message)
}

//* ******************** CHECK FUNCTIONS  ***********************************/
// Input Check function
export const inputCheck = (element: HTMLInputElement, regexp: RegExp, message: string) => {
  const isValid = ( isEmpty(element.value) || !regexp?.test(element.value))
  return isError(element, isValid, message)
}

// Empty value Check function
export const emptyCheck = (element: HTMLInputElement | (EventTarget & HTMLSelectElement), message: string) => {
  const isValid = isEmpty(element.value)
  return isError(element, isValid, message)
}


// returns check result with error message management
const isError = (element: HTMLInputElement | (EventTarget & HTMLSelectElement), isNotValid: boolean, message: string) => {
  if (isNotValid || element.value === '') {
    setValidationMessage(element, message)
    return false
  }
  clearValidationMessage(element)
  return true
}

const isEmpty = (fieldValue: string) =>  !(typeof fieldValue === 'string' && fieldValue.trim() !== '')
