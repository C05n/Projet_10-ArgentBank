import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
// 
import './styles/main.css';
// 
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
// 
import AppRoutes from './routes/Routes';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const rememberMe = localStorage.getItem('rememberMe');
    
    if (token && rememberMe === 'true') {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token,
          rememberMe: true
        }
      });
    }
  }, [dispatch]);
  

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;