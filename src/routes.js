import { Home } from './Pages/Home/Home';
import { Product } from './Pages/Product/Product';
import { Category } from './Pages/Category/Category';
import { Store } from './Pages/Store/Store'
import { Login } from './Pages/Login/Login'

//Routes
const routes = [
    //Home Page
    {
        path: '/',
        element: <Home />
    },
    //Product Page
    {
        path: '/product/:category/:productID',
        element: <Product />
    },
    //Category Page
    {
        path: 'category/:categoryName',
        element: <Category />
    },
    //Store Page
    {
        path: '/store',
        element: <Store />
    },
    //Login Page
    {
        path: '/login',
        element: <Login />
    },
]

export default routes