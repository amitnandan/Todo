import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'

const HeaderComponent = () => {



  const isAuth = isUserLoggedIn();
  const navigate = useNavigate();

  function handleLogout(){
    logout();
    navigate('/login')
  }

  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
                <a href = 'http://localhost:3000'
                    className='navbar-brand'
                >
                    Todo Management App
                </a>
            </div>

            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                  {
                      isAuth && 
                      <li className="nav-item">
                        <NavLink to="/todos" className="nav-link">
                          Todo
                        </NavLink>
      
      
                       </li>

                  }
              </ul>
            </div>
            <ul className='navbar-nav'>
              {

                  !isAuth && 
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                    </li>

  
  

              }

              {
                !isAuth &&
                
                <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>


               </li>

              }


          {
                isAuth &&
                
                <li className="nav-item">
                <NavLink to="/login" className="nav-link"
                  onClick={ handleLogout }
                >
                  Logout
                </NavLink>


               </li>

              }

              </ul>
        </nav>
      </header>

    </div>
  )
}

export default HeaderComponent

