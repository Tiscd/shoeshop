import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h2>Giỏ hàng trống</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '60px auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '40px' }}>Giỏ hàng của bạn</h1>

      <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div style={{ textAlign: 'right', marginTop: '40px', paddingTop: '20px', borderTop: '2px solid #eee' }}>
          <h3 style={{ fontSize: '24px', color: '#e91e63' }}>
            Tổng tiền: {totalPrice.toLocaleString('vi-VN')}₫
          </h3>

          <Link to="/checkout">
            <button className="btn-danger" style={{ marginTop: '20px', fontSize: '20px', padding: '16px 50px' }}>
              Tiến hành thanh toán
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;