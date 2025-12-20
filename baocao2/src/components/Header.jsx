import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="logo" style={{ fontSize: '32px', fontWeight: 'bold', color: '#e91e63' }}>
  DEE STORE
</div>

          <nav className="nav-menu">
            <Link to="/category/nike">Giày Nike</Link>
            <Link to="/category/adidas">Giày Adidas</Link>
            <Link to="/category/mlb">Giày MLB</Link>
            <Link to="/category/accessories">Phụ Kiện</Link>
            <Link to="/info">Thông Tin</Link>
          </nav>

          <SearchBar />

          <div className="header-icons">
            <Link to="/cart" className="cart-icon">
              🛒
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>

            {user ? (
              <div>
                <span>Xin chào, {user.name}</span>
                <button onClick={logout} style={{marginLeft: '10px', background:'none', color:'#e91e63'}}>Đăng xuất</button>
              </div>
            ) : (
              <>
                <Link to="/login">Đăng nhập</Link>
                <span> / </span>
                <Link to="/register">Đăng ký</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;