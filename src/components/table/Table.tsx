import THead from './THead'
import TBody from './TBody'
import { useSortableTable } from '../../hook/useSortableTable'
import { FilterableTable } from '../../utils/filter'
import { ChangeEvent, useState } from 'react'

const Table = ({ title, tableDatas, columns }: IPropsTable) => {
  const [filter, setFilter] = useState<string>(''),
    [sortedDatas, handleSorting] = useSortableTable(tableDatas, columns),
    filteredDatas = FilterableTable(sortedDatas, filter),
    // Onchange
    handleFilterChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setFilter(target.value)
    }

  return (
    filteredDatas && (
      <>
        <h1>{title}</h1>
        <div className='input-wrapper'>
          <label htmlFor='filter'>Search</label>
          <input type='text' id='filter' name='filter' onChange={handleFilterChange} />
        </div>
        <table>
          <THead {...{ columns, handleSorting }} />
          <TBody {...{ columns, tableDatas: filteredDatas }} />
        </table>
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
}

export interface ITableDatas extends Record<any, any> {
  id?: number
}
