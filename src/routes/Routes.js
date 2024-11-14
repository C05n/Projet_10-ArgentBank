import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import User from '../pages/User/User';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/User" element={<User />} />
   </Routes>
  )
};

export default AppRoutes;