// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue, push, orderByKey, query } from 'firebase/database'
import { useEffect, useState } from 'react'
import { IEmployee, IForm } from '../pages/createEmployee/CreateEmployee'
import { formattedEmployee, timestamp } from '../utils/formatter'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDY9lm11POiyt2zK8dyRqTGvUA9-keZ0Wg',
  authDomain: 'hr-net.firebaseapp.com',
  databaseURL: 'https://hr-net-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hr-net',
  storageBucket: 'hr-net.appspot.com',
  messagingSenderId: '319587148547',
  appId: '1:319587148547:web:8d67e9cd0e2ef766063f36',
  measurementId: 'G-T6Y9JK0WZH',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
// Create a new employee
export const createNewEmployee = (
  // employeeId: number,
  { firstName, lastName, birthDate, startDate, street, city, state, zipCode, department }: IForm,
) => {
  const reference = ref(db, 'employees/'),
    newEmployeeRef = push(reference),
    employee = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      startDate: startDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
      createdAt: timestamp,
      updatedAt: timestamp,
    }

  set(newEmployeeRef, employee)
}

// Get all employees
export const GetEmployeesList = () => {
  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])

  useEffect(() => {
    if (employeesList.length === 0) {
      const orderedQuery = query(ref(db, 'employees/'), orderByKey())
      return onValue(orderedQuery, (snapshot) => {
        const data: IEmployee[] = snapshot.val()

        if (snapshot.exists()) {
          Object.values(data).map((employee) => {
            console.log(Object.entries(employee))
            setEmployeesList((employees) => [...employees, formattedEmployee(employee)])
          })
        }
      })
    }
  }, [employeesList])

  return employeesList
}
