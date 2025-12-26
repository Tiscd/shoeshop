import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductAdmin from './pages/admin/ProductAdmin';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') {
    return <div style={{ textAlign: 'center', padding: '100px', color: '#ff5e62' }}>Bạn không có quyền truy cập trang admin.</div>;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <div className="container" style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:brand" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/admin/products" element={<ProtectedAdminRoute><ProductAdmin /></ProtectedAdminRoute>} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;