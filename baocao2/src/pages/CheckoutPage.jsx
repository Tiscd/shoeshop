import React from 'react';

const CheckoutPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '60px auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>Thông tin thanh toán</h1>

      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Họ và tên *</label>
            <input type="text" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Số điện thoại *</label>
            <input type="text" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Địa chỉ nhận hàng *</label>
            <input type="text" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '30px' }}>
            <div>
              <label>Tỉnh/Thành phố</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '8px' }}>
                <option>Hà Nội</option>
                <option>TP.HCM</option>
              </select>
            </div>
            <div>
              <label>Quận/Huyện</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '8px' }}><option>Chọn quận</option></select>
            </div>
            <div>
              <label>Phường/Xã</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '8px' }}><option>Chọn phường</option></select>
            </div>
          </div>

          <button type="submit" className="btn-danger" style={{ width: '100%', padding: '18px', fontSize: '20px' }}>
            Hoàn tất đặt hàng
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;