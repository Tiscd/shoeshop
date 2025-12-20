import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Regster";
import ProductDetail from "./pagesi/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./styles.css";
export default function App() {
return (
<BrowserRouter>
<AuthProvider>
<ProductProvider>
<CartProvider>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
</Routes>
</CartProvider>
</ProductProvider>
</AuthProvider>
</BrowserRouter>
);
}