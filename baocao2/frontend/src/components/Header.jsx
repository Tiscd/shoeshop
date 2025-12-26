import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <header style={{ background: 'linear-gradient(to right, #ff758c, #ff7eb3)', padding: '15px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
      <Link to="/" style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>Shoe Shop</Link>
      <nav style={{ display: 'flex', gap: '30px' }}>
        <Link to="/category/adidas" style={menuStyle}>Adidas</Link>
        <Link to="/category/gucci" style={menuStyle}>Gucci</Link>
        <Link to="/category/chanel" style={menuStyle}>Chanel</Link>
        <Link to="/category/mlb" style={menuStyle}>MLB</Link>
        <Link to="/category/nike" style={menuStyle}>Nike</Link>
        <Link to="/category/puma" style={menuStyle}>Puma</Link>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <SearchBar />
        <Link to="/cart" style={{ color: 'white', fontWeight: 'bold' }}>Giỏ hàng ({cart.length})</Link>
        {user ? (
          <>
            <span>Xin chào, {user.name}</span>
            <button onClick={logout} style={{ background: 'none', border: 'none', color: 'white' }}>Đăng xuất</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: 'white' }}>Đăng nhập</Link>
            <Link to="/register" style={{ color: 'white' }}>Đăng ký</Link>
          </>
        )}
      </div>
    </header>
  );
};

const menuStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
};

export default Header;