import { useState, useEffect } from 'react'

// Pagination Table Hook
const usePaginationTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([])
  const [slice, setSlice] = useState([])

  useEffect(() => {
    // Calculate Table Range
    const range = calculateRange(data, rowsPerPage)
    // Update Range State
    setTableRange([...range])
    // Slice Datas
    const slice = data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    // Update Slice Stateq
    setSlice([...slice])
  }, [data, setTableRange, page, setSlice, rowsPerPage])

  return { slice, range: tableRange }
}
// Calculate Table Range
const calculateRange = (data, rowsPerPage) => {
  const range = []
  const linesPerPage = Math.ceil(data.length / rowsPerPage)

  for (let i = 1; i <= linesPerPage; i++) {
    range.push(i)
  }
  return range
}

export default usePaginationTable
