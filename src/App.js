import './App.css';
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';

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

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>

  );
}




export default App;
