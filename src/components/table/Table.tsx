import THead from './THead'
import TBody from './TBody'
import { useSortableTable } from '../../hook/useSortableTable'
import { FilterableTable } from '../../hook/FilterableTable'
import { ChangeEvent, useState } from 'react'

const Table = ({ title, tableDatas, columns }: IPropsTable) => {
  const [filter, setFilter] = useState(''),
    [sortedDatas, handleSorting] = useSortableTable(tableDatas, columns),
    filteredDatas = FilterableTable(sortedDatas, filter),
    // Onchange, check and stock form datas in useState
    handleFilterChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setFilter(target.value)
    }

  return (
    <>
      {sortedDatas && (
        <>
          <h1>{title}</h1>
          <div className='input-wrapper'>
            <label htmlFor='filter'>Search</label>
            <input type='text' id='filter' name='filter' onChange={handleFilterChange} />
          </div>
          <table>
            <THead columns={columns} handleSorting={handleSorting} />
            <TBody columns={columns} tableDatas={filteredDatas} />
          </table>
        </>
      )}
    </>
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
