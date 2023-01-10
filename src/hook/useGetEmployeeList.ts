import { useCallback, useEffect, useState } from 'react'
import { IEmployee } from '../pages/createEmployee/CreateEmployee'
import { onValue, orderByKey, query, ref } from 'firebase/database'
import { formattedEmployee } from '../utils/formatter'
import { db } from '../api/firebase'

// Get all employees
export const useGetEmployeesList = () => {
  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])

  const showEmployeesList = useCallback(() => {
    if (employeesList.length === 0) {
      const orderedQuery = query(ref(db, 'employees/'), orderByKey())
      return onValue(orderedQuery, (snapshot) => {
        const data: IEmployee[] = snapshot.val()

        if (snapshot.exists()) {
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
