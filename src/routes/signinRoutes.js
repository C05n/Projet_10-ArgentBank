import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignInRoute = ({ children }) => {
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
   return isAuthenticated ? <Navigate to="/user" /> : children;
};

export default SignInRoute;