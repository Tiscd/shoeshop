import React from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  return (
    <div style={{ width: '250px', padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
      <h3 style={{ marginBottom: '20px' }}>Lọc sản phẩm</h3>

      <div style={{ marginBottom: '30px' }}>
        <h4>Giá</h4>
        <label><input type="checkbox" /> Dưới 500.000đ</label><br/>
        <label><input type="checkbox" /> 500.000 - 1.000.000đ</label><br/>
        <label><input type="checkbox" /> 1.000.000 - 2.000.000đ</label><br/>
        <label><input type="checkbox" /> Trên 2.000.000đ</label>
      </div>

      <div>
        <h4>Màu sắc</h4>
        <label><input type="checkbox" /> Trắng</label><br/>
        <label><input type="checkbox" /> Đen</label><br/>
        <label><input type="checkbox" /> Đỏ</label><br/>
        <label><input type="checkbox" /> Xanh</label>
      </div>
    </div>
  );
};

export default FilterSidebar;