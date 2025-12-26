import React, { useState } from 'react';

const FilterSidebar = ({ onFilter }) => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleApply = () => {
    onFilter({ priceFrom, priceTo, brand, color, size });
  };

  return (
    <div style={{
      width: '280px',
      padding: '25px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      marginRight: '30px',
      position: 'sticky',
      top: '20px',
      height: 'fit-content',
    }}>
      <h3 style={{ color: '#ff758c', marginBottom: '20px', fontSize: '20px' }}>Bộ Lọc Sản Phẩm</h3>

      {/* Khoảng Giá */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Khoảng Giá</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="number"
            placeholder="Từ"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '14px',
            }}
          />
          <span style={{ color: '#999', fontSize: '20px' }}>-</span>
          <input
            type="number"
            placeholder="Đến"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '14px',
            }}
          />
        </div>
      </div>

      {/* Thương Hiệu */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Thương Hiệu</label>
        <input
          placeholder="Nhập thương hiệu (ví dụ: Nike)"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Màu Sắc */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Màu Sắc</label>
        <input
          placeholder="Nhập màu (ví dụ: Đỏ)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Size */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Size</label>
        <input
          placeholder="Nhập size (ví dụ: 38)"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Nút Áp dụng */}
      <button
        onClick={handleApply}
        style={{
          width: '100%',
          padding: '12px',
          background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'background 0.3s',
        }}
        onMouseOver={(e) => e.target.style.background = 'linear-gradient(to right, #ff7eb3, #ff758c)'}
        onMouseOut={(e) => e.target.style.background = 'linear-gradient(to right, #ff758c, #ff7eb3)'}
      >
        Áp dụng bộ lọc
      </button>
    </div>
  );
};

export default FilterSidebar;