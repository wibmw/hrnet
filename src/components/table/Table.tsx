import { useSortableTable } from '../../hook/useSortableTable'
import THead from './THead'
import TBody from './TBody'

const Table = ({ caption: Title, tableDatas, columns }: IPropsTable) => {
  const [sortedDatas, handleSorting] = useSortableTable(tableDatas, columns)

  return (
    sortedDatas && (
      <>
        {console.log(sortedDatas)}
        <h1>{Title}</h1>
        <table>
          <THead columns={columns} handleSorting={handleSorting} />
          <TBody columns={columns} tableDatas={sortedDatas} />
        </table>
      </>
    )
  )
}

export default Table

interface IPropsTable extends IChildren, ITable {
  caption: string
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

interface IChildren {
  children?: JSX.Element
}

export interface ITableDatas extends Record<any, any> {
  id?: number
}
