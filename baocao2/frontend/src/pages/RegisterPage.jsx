// RegisterPage.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name: username });
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center' }}>
      <h2>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
        <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
        <input type="text" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
        <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd' }} />
        <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>Đăng ký</button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Đã có tài khoản? <Link to="/login" style={{ color: '#e91e63' }}>Đăng nhập</Link>
      </p>
    </div>
  );
};

export default RegisterPage;