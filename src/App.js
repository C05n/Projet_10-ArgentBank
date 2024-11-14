import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 
import { Provider } from 'react-redux';
import store from './store/store';
// 
import './styles/main.css';
// 
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
// 
import AppRoutes from './routes/Routes';

function App() {
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