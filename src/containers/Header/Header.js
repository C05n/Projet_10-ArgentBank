import Logo from '../../img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Header() {
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
   const dispatch = useDispatch()

   const handleLogout = () => {
      dispatch({ type: 'LOGOUT' })
    }

   return (
      <nav className="main-nav">
         <NavLink to="/" className="main-nav-logo">
            <img
               className="main-nav-logo-image"
               src={Logo}
               alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
         </NavLink>
         <div>
            {isAuthenticated ? (
               <>
               <NavLink to="/User" className="main-nav-item">
                  <i className="fa fa-user-circle"></i>
                  {/* {userName} */}
               </NavLink>
               <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
                  <i className="fa fa-sign-out"></i>
                  Sign Out
               </NavLink>
            </>
            ) : (
            <NavLink to="/SignIn" className="main-nav-item">
               <i className="fa fa-user-circle"></i>
               Sign In
            </NavLink>
            )}
         </div>
      </nav>
   );
}
export default Header;