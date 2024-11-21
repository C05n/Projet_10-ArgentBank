import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import SignInRoute from './signinRoutes';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import User from '../pages/User/User';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element=
        {<SignInRoute>
          <SignIn />
        </SignInRoute>} />
      <Route path="/user" element=
        {<PrivateRoute>
          <User />
        </PrivateRoute>}
      />
    </Routes>
  )
};

export default AppRoutes;