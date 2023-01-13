//* ******************** DISPLAY MESSAGES  ***********************************/
// clear validation message
export const clearValidationMessage = (element: HTMLElement): void => {
  element?.setAttribute('data-error-visible', 'false')
  element?.closest('.input-wrapper')?.setAttribute('data-error', '')
}

// set validation message
export const setValidationMessage = (element: HTMLElement, message: string): void => {
  element?.setAttribute('data-error-visible', 'true')
  element?.closest('.input-wrapper')?.setAttribute('data-error', message)
}
