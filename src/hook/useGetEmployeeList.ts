import { useEffect, useState } from 'react'
import { IEmployee } from '../pages/createEmployee/CreateEmployee'
import { onValue, orderByKey, query, ref } from 'firebase/database'
import { formattedEmployee } from '../utils/formatter'
import { db } from '../api/firebase'

// Get all employees
export const useGetEmployeesList = () => {
  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])

  useEffect(() => {
    if (employeesList.length === 0) {
      const orderedQuery = query(ref(db, 'employees/'), orderByKey())
      return onValue(orderedQuery, (snapshot) => {
        const data: IEmployee[] = snapshot.val()

        if (snapshot.exists()) {
          Object.values(data).map((employee) => {
            setEmployeesList((employees) => [...employees, formattedEmployee(employee)])
          })
        }
      })
    }
  }, [employeesList])

  return employeesList
}
