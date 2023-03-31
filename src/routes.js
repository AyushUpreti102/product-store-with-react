import { Home } from './Pages/Home/Home';
import { Product } from './Pages/Product/Product';
import { Category } from './Pages/Category/Category';

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
]

export default routes