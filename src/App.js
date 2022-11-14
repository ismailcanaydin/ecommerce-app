import './App.css';
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Singin from './pages/Auth/Singin';
import Singup from './pages/Auth/Singup';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />

        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:product_id' element={<ProductDetail />} />
          <Route path='/singin' element={<Singin />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}




export default App;
