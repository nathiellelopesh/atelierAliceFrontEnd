import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import ProductDetails from "./pages/ProductDetails/Product.jsx";
import Admin from './pages/Admin/Admin.jsx';

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
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

