// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, onValue } from 'firebase/database'
import { useEffect, useState } from 'react'
import { IForm } from '../pages/createEmployee/CreateEmployee'
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
  employeeId: number,
  { firstName, lastName, birthDate, startDate, street, city, state, zipCode, department }: IForm,
) => {
  const reference = ref(db, 'employees/' + employeeId)

  set(reference, {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    startDate: startDate,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    department: department,
  })
}

// Create a new employee
export const GetEmployeesList = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const query = ref(db, 'employees/')
    return onValue(query, (snapshot) => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project])
        })
      }
    })
  }, [])

  return projects
}
