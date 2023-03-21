import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Product } from './Pages/Product/Product'
import { Category } from './Pages/Category/Category';
// import { Error } from './Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:category/:productID',
    element: <Product />
  },
  {
    path: 'category/:categoryName',
    element: <Category />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
