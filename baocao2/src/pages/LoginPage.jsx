// LoginPage.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: username });
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center' }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
        <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
        <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd' }} />
        <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>Đăng nhập</button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Chưa có tài khoản? <Link to="/register" style={{ color: '#e91e63' }}>Đăng ký ngay</Link>
      </p>
    </div>
  );
};

export default LoginPage;