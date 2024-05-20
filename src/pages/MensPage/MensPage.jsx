// MensPage.jsx

import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/firebase-service';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './MensPage.module.scss';

const MensPage = () => {
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        const filteredProducts = allProducts.filter((product) => product.gender === 'Men');
        setMensProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Men's Products</h1>
      <div className={styles.productsGrid}>
        {mensProducts.length > 0 ? (
          mensProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No men's products found.</p>
        )}
      </div>
    </div>
  );
};

export default MensPage;