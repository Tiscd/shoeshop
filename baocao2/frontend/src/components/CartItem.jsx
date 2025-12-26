import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div style={{
      display: 'flex',
      padding: '20px 0',
      borderBottom: '1px solid #eee',
      alignItems: 'center',
      gap: '20px'
    }}>
      <img src={item.image} alt={item.name} style={{ width: '120px', borderRadius: '8px' }} />
      <div style={{ flex: 1 }}>
        <h3>{item.name}</h3>
        <p style={{ fontWeight: 'bold', color: '#e91e63', fontSize: '18px' }}>
          {item.price.toLocaleString('vi-VN')}₫
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
        <input type="number" value={item.quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)} style={{ color: 'red' }}>Xóa</button>
    </div>
  );
};

export default CartItem;