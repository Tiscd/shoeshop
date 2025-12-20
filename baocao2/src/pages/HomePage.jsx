import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', padding: '100px' }}>Đang tải sản phẩm...</p>;

  return (
    <div>
      {/* Banner lớn (có thể thay bằng slider sau) */}
      <div style={{
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/assets/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        marginBottom: '60px',
        borderRadius: '0 0 20px 20px'
      }}>
        <div>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>DEE STORE</h1>
          <p style={{ fontSize: '24px' }}>Chuyên giày thể thao chính hãng Nike, Adidas, MLB</p>
          <button className="btn-primary" style={{ marginTop: '30px', fontSize: '18px' }}>
            Khám phá ngay
          </button>
        </div>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px' }}>Sản phẩm nổi bật</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;