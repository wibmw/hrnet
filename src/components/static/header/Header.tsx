import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.jpg'

const Header = () => {
  return (
    <>
      {/** *********** Header Section ******************/}
      <header id=''>
        {/** *********** Nav Section ******************/}
        <nav className='main-nav'>
          {/** *********** Logo link to Home page ******************/}
          <Link to={'/'} className='main-nav-logo'>
            <img className='main-nav-logo-image' src={logo} alt='HR Net Logo' />
          </Link>
          {/** *********** Title ******************/}
          <h1>HR Net</h1>
          {/** *********** Link to employee list page ******************/}
          <div>
            <Link to={'/employees-list'} className='main-nav-item'>
              <i className='far fa-list-alt'> </i>
              <b> Employees List</b>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
