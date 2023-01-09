import { useState } from 'react'
import { ITableDatas } from '../components/table/Table'

const getFilteredData = (unFilteredDatas: ITableDatas[], filter: string) => {
  const insensitiveFilter = new RegExp(filter.trim(), 'i'),
    filteredDatas = unFilteredDatas?.filter((data) =>
      Object.values(data).some((value) => typeof value === 'string' && value.match(insensitiveFilter)),
    )

  if (filter.trim() === '') return unFilteredDatas

  return filteredDatas
}

function getDefaultSorting(defaultTableData: ITableDatas[], columns) {
  if (!(Symbol.iterator in Object(defaultTableData))) {
    return defaultTableData
  }
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter((column) => column?.sortbyOrder)

    // Merge all array objects into single object and extract accessor and sortbyOrder keys
    const { accessor = 'id', sortbyOrder = 'asc' } = Object.assign({}, ...filterColumn)

    if (a[accessor] === null) return 1
    if (b[accessor] === null) return -1
    if (a[accessor] === null && b[accessor] === null) return 0

    const ascending = a[accessor]?.toString().localeCompare(b[accessor].toString(), 'en', {
      numeric: true,
    })

    return sortbyOrder === 'asc' ? ascending : -ascending
  })
  return sorted
}

export const useSortableTable = (data, columns, filter) => {

  const filteredData = getFilteredData(data, filter)
  const [tableData, setTableData] = useState(getDefaultSorting(filteredData, columns))

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData]?.sort((a, b) => {
        if (a[sortField] === null) return 1
        if (b[sortField] === null) return -1
        if (a[sortField] === null && b[sortField] === null) return 0
        return (
          a[sortField]?.toString()?.localeCompare(b[sortField]?.toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        )
      })
      setTableData(sorted)
    }
  }

  return [tableData, handleSorting] as const
}
