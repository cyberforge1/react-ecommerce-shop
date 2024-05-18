// ProductCard.jsx


import React from 'react';
import styles from './ProductCard.module.scss';
import { Link } from "react-router-dom";
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const ProductCard = ({ product, onFavoriteToggle }) => {
  const handleVariantChange = (event) => {
    console.log("Selected Variant:", event.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to={`/products/${product.id}`}>
          <div className={styles.imageStyle}>
            <img src={product.imageUrl} alt={product.name} />
          </div>
        </Link>
      </div>
      <div className={styles.header}>
      </div>
      {product.colors && (
        <div className={styles.productColors}>
          {product.colors.map((color, index) => (
            <div key={index} className={styles.colorSwatch} style={{ backgroundColor: color }}></div>
          ))}
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.labels}>
          <p className={styles.unisexLabel}>UNISEX</p>
          <p className={styles.sizeLabel}>XXS-XXL</p>
        </div>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.price}>${product.price}</p>
        <div className={styles.rating}>
          <span className={styles.stars}>⭐⭐⭐⭐☆</span>
          <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} className={styles.favoriteButton} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
