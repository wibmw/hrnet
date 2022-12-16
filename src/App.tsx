import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/static/footer/Footer'
import Header from './components/static/header/Header'
import CreateEmployee from './pages/createEmployee/CreateEmployee'
import CurrentEmployees from './pages/currentEmployees/CurrentEmployees'
import Error from './pages/error/Error'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/** *********** Error Page ******************/}
          <Route path={'*'} element={<Error />} />
          {/** *********** Homepage without params ******************/}
          <Route path={'/'} element={<CreateEmployee />} />
          {/** *********** Sign In Page ******************/}
          <Route path={'/employees-list'} element={<CurrentEmployees />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
