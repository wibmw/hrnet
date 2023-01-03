import { useState } from 'react'
import { IColumn } from './Table'

const THead = ({ columns, handleSorting }: IPropsHead) => {
  const [sortField, setSortField] = useState<string>('')
  const [order, setOrder] = useState<'desc' | 'asc'>('asc')

  const handleSortingChange = (accessor: string) => {
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc'
    setSortField(accessor)
    setOrder(sortOrder)
    handleSorting(accessor, sortOrder)
  }

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField === accessor && order === 'asc'
              ? 'up'
              : sortField === accessor && order === 'desc'
              ? 'down'
              : 'default'
            : ''
          return (
            <th key={accessor} onClick={sortable ? () => handleSortingChange(accessor) : null} className={cl}>
              {label}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default THead

export interface IPropsHead {
  columns: IColumn[]
  handleSorting: (sortField: string, sortOrder: string) => void
}
