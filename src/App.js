import './App.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './pages/products';
import ProductDetails from './pages/productDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/productDetails/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
