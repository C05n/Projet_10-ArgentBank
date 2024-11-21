import Logo from '../../img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile } from '../../store/reducers/userSlice';
import { useEffect } from 'react';

function Header() {
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
   const dispatch = useDispatch()
   const userName = useSelector(state => state.user.userName);

   const userNameFromLocalStorage = localStorage.getItem('userName');
   const finalUserName = userName || userNameFromLocalStorage || 'Guest';

   const handleLogout = () => {
      dispatch({ type: 'LOGOUT' })
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
   }

   useEffect(() => {
      // Si on a un token dans localStorage, on essaie de récupérer le profil utilisateur
      if (localStorage.getItem('token') && !userName) {
         dispatch(getUserProfile());
      }
   }, [dispatch, userName]);

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
                     {finalUserName}
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