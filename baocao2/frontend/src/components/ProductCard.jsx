import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price.toLocaleString('vi-VN')}₫</p>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;