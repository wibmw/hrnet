import { useCallback, useEffect, useState } from 'react'
import { onValue, orderByKey, query, ref } from 'firebase/database'
import { db } from '../api/firebase'
import { IEmployee } from '../pages/createEmployee/CreateEmployee'
import { formattedEmployee } from '../utils/formatter'

// Get Employees data from Firebase Database
export const useGetEmployeesList = () => {
  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])

  const showEmployeesList = useCallback(() => {
    if (employeesList.length === 0) {
      const orderedQuery = query(ref(db, 'employees/'), orderByKey())
      return onValue(orderedQuery, (snapshot) => {
        const data: IEmployee[] = snapshot.val()

        if (snapshot.exists()) {
          // Format datas before returning it
          const employees = Object.values(data).map((employe) => formattedEmployee(employe))
          setEmployeesList(employees)
        }
      })
    }
  }, [employeesList])

  useEffect(() => {
    showEmployeesList()
  }, [employeesList])

  return employeesList
}
