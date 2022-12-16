import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.jpg'

const Header = () => {
  return (
    <>
      {/** *********** Header Section ******************/}
      <header id=''>
        {/** *********** Nav Section ******************/}
        <nav className='main-nav'>
          <Link to={'/'} className='main-nav-logo'>
            <img className='main-nav-logo-image' src={logo} alt='HR Net Logo' />
          </Link>
          <h1>HR Net</h1>
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
