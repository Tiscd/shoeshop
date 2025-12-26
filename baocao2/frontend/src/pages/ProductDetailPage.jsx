import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { getProductById } from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart({ ...product, size: selectedSize, color: selectedColor });
      alert('Đã thêm vào giỏ!');
    } else {
      alert('Hết hàng!');
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>
      <img src={product.image} alt={product.name} style={{ width: '400px', borderRadius: '15px' }} />
      <div>
        <h1>{product.name}</h1>
        <p>Giá: {product.price.toLocaleString('vi-VN')}đ</p>
        <p>Mô tả: {product.description}</p>
        <p>Thương hiệu: {product.brand}</p>
        <p>Màu: <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}><option>Đỏ</option><option>Xanh</option></select></p>
        <p>Size: <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}><option>38</option><option>39</option></select></p>
        <p>Số lượng tồn: {product.stock}</p>
        <button onClick={handleAddToCart} className="btn">Thêm vào giỏ</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;