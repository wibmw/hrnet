import { ITable } from './Table'

const TableBody = ({ tableDatas, columns }: ITable) => {
  return (
    <tbody>
      {tableDatas.length && tableDatas?.map((data, index) => {
        return (
          <tr key={data.id+'-'+index}>
            {columns?.map(({ accessor} ) => {
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
