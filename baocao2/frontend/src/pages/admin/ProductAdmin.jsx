import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../services/api';

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', image: '', description: '', brand: '', size: '', stock: '', color: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateProduct(editingId, formData);
      setEditingId(null);
    } else {
      await addProduct(formData);
    }
    getProducts().then(data => setProducts(data));
    setFormData({ name: '', price: '', image: '', description: '', brand: '', size: '', stock: '', color: '' });
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    getProducts().then(data => setProducts(data));
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Quản lý sản phẩm (Admin)</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Tên giày" value={formData.name} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Giá" value={formData.price} onChange={handleChange} required />
        <input name="image" placeholder="URL ảnh" value={formData.image} onChange={handleChange} required />
        <input name="description" placeholder="Mô tả" value={formData.description} onChange={handleChange} required />
        <input name="brand" placeholder="Thương hiệu" value={formData.brand} onChange={handleChange} required />
        <input name="size" placeholder="Size" value={formData.size} onChange={handleChange} required />
        <input name="stock" type="number" placeholder="Số lượng tồn" value={formData.stock} onChange={handleChange} required />
        <input name="color" placeholder="Màu" value={formData.color} onChange={handleChange} required />
        <button type="submit">{editingId ? 'Sửa' : 'Thêm'}</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}đ
            <button onClick={() => handleEdit(product)}>Sửa</button>
            <button onClick={() => handleDelete(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductAdmin;