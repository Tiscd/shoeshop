import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { getProductsByCategory } from '../services/api';

const CategoryPage = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(brand || 'all');
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, [brand]);

  if (loading) return <p style={{ textAlign: 'center', padding: '100px' }}>Đang tải...</p>;

  return (
    <div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
      <FilterSidebar />

      <div style={{ flex: 1 }}>
        <h2 style={{ textTransform: 'capitalize', marginBottom: '30px', fontSize: '28px' }}>
          Giày {brand || 'Tất cả'}
        </h2>

        {products.length === 0 ? (
          <p>Không tìm thấy sản phẩm nào.</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;