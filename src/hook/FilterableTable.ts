
import { ITableDatas } from '../components/table/Table'

export const FilterableTable = (unFilteredDatas: ITableDatas[], filter: string) => {
  console.log(filter)
  const insensitiveFilter = new RegExp(filter.trim(), 'i'),
    filteredDatas = 
        unFilteredDatas?.filter((data) =>
          Object.values(data).some((value) => typeof value === 'string' && value.match(insensitiveFilter)),
        )

  if (filter.trim() === '') return unFilteredDatas

  return filteredDatas
}
