import logo from './logo.svg';
import './App.css';
import Products from "./pages/Products"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Singin from './pages/Auth/Singin';
import Singup from './pages/Auth/Singup';

function App() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />;
  //     break;
  //   case "/pricing":
  //     component = <Pricing />;
  //     break;
  //   case "/about":
  //     component = <About />;
  //     break;
  // }

  return (
    <BrowserRouter>
      <div className="">


        <Navbar />

        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/singin' element={<Singin />} />
          <Route path='/singup' element={<Singup />} />
        </Routes>


        {/* {component} */}
      </div>
    </BrowserRouter>

  );
}




export default App;
