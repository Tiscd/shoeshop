import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { getProductsByCategory } from '../services/api';

const CategoryPage = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(brand).then(data => setProducts(data));
  }, [brand]);

  const handleFilter = (filters) => {
    // Gọi API với filters (priceFrom, priceTo, brand, color, size)
    getProductsByCategory(brand, filters).then(data => setProducts(data));
  };

  return (
    <div style={{ display: 'flex' }}>
      <FilterSidebar onFilter={handleFilter} />
      <div style={{ flex: 1 }}>
        <h2>{brand.toUpperCase()}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;