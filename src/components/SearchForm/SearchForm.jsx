// SearchForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchForm.module.scss';

const SearchForm = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery}`);
      onClose();
    }
  };

  return (
    <div className={styles.searchFormContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
        <button type="button" onClick={onClose} className={styles.closeButton}>X</button>
      </form>
    </div>
  );
};

export default SearchForm;
