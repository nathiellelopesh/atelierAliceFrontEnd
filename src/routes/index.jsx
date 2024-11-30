import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from '../pages/Home/Home.jsx';
import ProductDetails from "../pages/ProductDetails/Product.jsx";
import Admin from '../pages/Admin/AllProducts/Admin.jsx';
import UpdateProductsScreen from '../pages/Admin/UpdateProducts/index.jsx';
import AddProduct from '../pages/Admin/AddProduct/index.jsx';
import Sold from '../pages/Admin/Sold/index.jsx';
import Contacts from '../pages/Admin/Contacts/index.jsx';
import SignIn from '../pages/SignIn/SignIn.jsx';
import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    index: true
  },
  {
    path: '/produto/:id',
    element: <ProductDetails/>
  },
  {
    path: '/admin/signin',
    element: <SignIn/>
  },
  {
    element: <ProtectedRoute />,
    children: [
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
      },
      {
        path: '/admin/contacts',
        element: <Contacts/>
      }
    ]
  },
  {
    path: '*',
    element: <p>404 Error</p>
  }
]);

const Index = () => {
    return <RouterProvider router={router} />
}

export default Index;
//