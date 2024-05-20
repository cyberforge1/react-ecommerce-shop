// WomensPage.jsx

import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/firebase-service';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './WomensPage.module.scss';

const WomensPage = () => {
  const [womensProducts, setWomensProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        const filteredProducts = allProducts.filter((product) => product.gender === 'Women');
        setWomensProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Women's Products</h1>
      <div className={styles.productsGrid}>
        {womensProducts.length > 0 ? (
          womensProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No women's products found.</p>
        )}
      </div>
    </div>
  );
};

export default WomensPage;