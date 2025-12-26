import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/category/all?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex' }}>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px 15px',
          width: '300px',
          border: '1px solid #ddd',
          borderRadius: '30px 0 0 30px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          background: 'black',
          color: 'white',
          borderRadius: '0 30px 30px 0',
        }}
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;