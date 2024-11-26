import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import ProductDetails from "./pages/ProductDetails/Product.jsx";
import Admin from './pages/Admin/AllProducts/Admin.jsx';
import UpdateProductsScreen from './pages/Admin/UpdateProducts/index.jsx';
import AppProvider from './context.jsx';
import AddProduct from './pages/Admin/AddProduct/index.jsx';
import Sold from './pages/Admin/Sold/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/produto/:id',
    element: <ProductDetails/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '/admin/update/:id',
    element: <UpdateProductsScreen/>
  },
  {
    path: '/admin/newProduct',
    element: <AddProduct/>
  },
  {
    path: '/admin/sold',
    element: <Sold/>
  }
])

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>

)

