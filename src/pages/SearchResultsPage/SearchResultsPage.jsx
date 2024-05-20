// SearchResultsPage.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../../services/firebase-service';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './SearchResultsPage.module.scss';

const SearchResultsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        const filtered = allProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <h1>Search Results for "{query}"</h1>
      <div className={styles.productsGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
