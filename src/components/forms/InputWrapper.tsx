const InputWrapper = (props: { name: string; label: string; children: JSX.Element }) => {
  const { name, label, children } = props

  return (
    <>
      {/** *********** Input ******************/}
      <div className='input-wrapper'>
        <label htmlFor={name}>{label}</label>
        {children && children}
      </div>
    </>
  )
}

export default InputWrapper
