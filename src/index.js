import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Product } from './Pages/Product/Product';
import { Category } from './Pages/Category/Category';
import { Store } from './Pages/Store/Store'
import { Login } from './Pages/Login/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:category/:productID' element={<Product />}></Route>
          <Route path='category/:categoryName' element={<Category />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
