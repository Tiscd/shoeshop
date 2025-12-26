import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { processPayment } from '../services/payment';

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', voucher: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await processPayment({ ...formData, cart, total: totalPrice });
    if (result.success) {
      alert('Đặt hàng thành công!');
      clearCart();
    } else {
      alert('Đặt hàng thất bại!');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '60px auto' }}>
      <h1>Thanh toán</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Họ tên" value={formData.name} onChange={handleChange} required />
        <input name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} required />
        <input name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} required />
        <select name="voucher" value={formData.voucher} onChange={handleChange}>
          <option value="">Chọn voucher</option>
          <option value="discount10">Giảm 10%</option>
        </select>
        <p>Tổng tiền: {totalPrice.toLocaleString('vi-VN')}đ</p>
        <button type="submit" className="btn">Đặt hàng</button>
      </form>
    </div>
  );
};

export default CheckoutPage;