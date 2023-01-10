import THead from './THead'
import TBody from './TBody'
import { useSortableTable } from '../../hook/useSortableTable'
import { ChangeEvent, useState } from 'react'
import useTable from '../../hook/useTable'
import TFooter from './TFooter'
import { FilterableTable } from '../../utils/filter'

const Table = ({ title, tableDatas, columns }: IPropsTable) => {
  const [filter, setFilter] = useState<string>(''),
    [sortedDatas, handleSorting] = useSortableTable(tableDatas, columns),
    [page, setPage] = useState<number>(1),
    [rangeScope, setRangeScope] = useState<number>(10),
    [filteredData, setFilteredData] = useState(FilterableTable(sortedDatas, filter)),
    { slice, range } = useTable(filteredData, page, rangeScope),
    // Onchange
    handleFilterChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setFilter(target.value)
      setFilteredData(FilterableTable(sortedDatas, target.value))
    }

  return (
    slice && (
      <>
        <h1>{title}</h1>
        <div className='filter'>
          <label htmlFor='filter'>Search </label>
          <input type='text' id='filter' name='filter' onChange={handleFilterChange} />
        </div>
        <div className='tableWrapper'>
          <table>
            <THead {...{ columns, handleSorting }} />
            <TBody {...{ columns, tableDatas: slice }} />
          </table>
          <TFooter {...{ slice, range, setPage, page, setRangeScope }} />
        </div>
      </>
    )
  )
}

export default Table

interface IPropsTable extends ITable {
  title: string
}

export interface ITable {
  tableDatas: ITableDatas[]
  columns: IColumn[]
}

export interface IColumn {
  label: string
  accessor: string
  sortable: boolean
  className: string
}

export interface ITableDatas extends Record<any, any> {
  id?: number
}
