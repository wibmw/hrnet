// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, push } from 'firebase/database'
import { IForm } from '../pages/createEmployee/CreateEmployee'
import { timestamp } from '../utils/formatter'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
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
