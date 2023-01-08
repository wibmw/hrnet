import { useEffect } from 'react'
import { ITableDatas } from './Table'

const TableFooter = ({ range, setPage, page, slice }: IPropsTFooter) => {
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
    </div>
  )
}

export default TableFooter

interface IPropsTFooter {
  slice: ITableDatas[]
  page: number
  range: number[]
  setPage: (number) => void
}
