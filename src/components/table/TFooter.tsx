import { ChangeEventHandler, useEffect } from 'react'
import { ITableDatas } from './Table'

const TableFooter = ({ setPage, page, slice, range, setRangeScope }: IPropsTFooter) => {
  const handleRangeChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setRangeScope(parseInt(event.target.value))
  }

  useEffect(() => {
    if (slice.length < 1 && page > range.length) {
      setPage(page - 1)
    }
    if (slice.length < 1 && page < 1) {
      setPage(page + 1)
    }
  }, [slice, page, setPage])

  return (
    <div className='tableFooter'>
      <button
        key='previous'
        className={`button ${page > 1 ? 'activeButton' : 'inactiveButton'}`}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      {range.map((el, index) => (
        <button
          key={index}
          className={`button ${page === el ? 'activeButton' : 'inactiveButton'}`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
      <button
        key='next'
        className={`button ${page < range.length ? 'activeButton' : 'inactiveButton'}`}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      <select id='range' name='range' onChange={handleRangeChange}>
        {rangeOptions.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TableFooter

interface IPropsTFooter {
  slice: ITableDatas[]
  page: number
  range: number[]
  setPage: (number) => void
  setRangeScope: (number) => void
}

const rangeOptions = [
  { value: 10, text: '10' },
  { value: 20, text: '20' },
  { value: 30, text: '30' },
  { value: 50, text: '50' },
  { value: 100, text: '100' },
]
