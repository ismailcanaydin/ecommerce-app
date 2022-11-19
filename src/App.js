import './App.css';
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import ProtectedRouteAdmin from './pages/Admin/ProtectedRoute';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';
import Home from './pages/Admin/Home'
import AdminProducts from './pages/Admin/Products'
import Orders from './pages/Admin/Orders'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />

        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:product_id' element={<ProductDetail />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='*' element={<Error404 />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<ProtectedRouteAdmin />}>
            <Route index path='/admin' element={<Admin />} />

            <Route path='/admin/home' element={<Home />} />
            <Route path='/admin/orders' element={<Orders />} />
            <Route path='/admin/products' element={<AdminProducts />} />
          </Route>



        </Routes>

      </div>
    </BrowserRouter>

  );
}




export default App;
