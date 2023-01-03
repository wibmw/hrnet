import { ITable } from './Table'

const TableBody = ({ tableDatas, columns }: ITable) => {
  return (
    <tbody>
      {tableDatas.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : '——'
              return <td key={accessor}>{tData}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
