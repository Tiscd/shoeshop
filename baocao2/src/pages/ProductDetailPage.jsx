import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { getProductById } from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ textAlign: 'center', padding: '100px' }}>Đang tải chi tiết sản phẩm...</p>;

  const sizes = [36, 37, 38, 39, 40, 41, 42, 43];

  return (
    <div style={{ display: 'flex', gap: '60px', margin: '60px 0', alignItems: 'flex-start' }}>
      <div style={{ flex: '1' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
        />
      </div>

      <div style={{ flex: '1' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>{product.name}</h1>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#e91e63', marginBottom: '20px' }}>
          {product.price.toLocaleString('vi-VN')}₫
        </p>

        <p style={{ lineHeight: '1.8', marginBottom: '30px', color: '#555' }}>
          {product.description || 'Sản phẩm chính hãng 100%, fullbox, mới 100%. Bảo hành chính hãng từ nhà sản xuất.'}
        </p>

        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Chọn size:</label>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: '10px 16px',
                  border: selectedSize === size ? '2px solid #e91e63' : '1px solid #ddd',
                  background: selectedSize === size ? '#fff' : '#f9f9f9',
                  borderRadius: '8px',
                  minWidth: '50px'
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '30px' }}>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '10px 15px' }}>-</button>
            <span style={{ padding: '10px 20px', minWidth: '60px', textAlign: 'center' }}>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '10px 15px' }}>+</button>
          </div>

          <button
            className="btn-primary"
            style={{ flex: 1, fontSize: '18px', padding: '16px' }}
            onClick={() => {
              if (!selectedSize) {
                alert('Vui lòng chọn size!');
                return;
              }
              addToCart({ ...product, quantity, selectedSize });
              alert('Đã thêm vào giỏ hàng!');
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>

        <button className="btn-danger" style={{ width: '100%', fontSize: '20px', padding: '18px' }}>
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;