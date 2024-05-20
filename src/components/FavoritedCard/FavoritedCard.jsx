// FavoritedCard.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductImageWithFavorite from '../ProductImageWithFavorite/ProductImageWithFavorite';
import styles from './FavoritedCard.module.scss';

const FavoritedCard = ({ product, onFavoriteToggle }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <NavLink to={`/products/${product.id}`} className={styles.imageWrapper}>
        <ProductImageWithFavorite product={product} onFavoriteToggle={onFavoriteToggle} />
      </NavLink>
      <div className={styles.info}>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.size}>Size: {product.size}</p>
        <p className={styles.availability}>{product.availability}</p>
        <div className={styles.priceSection}>
          {product.discountedPrice && (
            <p className={styles.discountedPrice}>${product.discountedPrice}</p>
          )}
          {product.originalPrice && (
            <p className={styles.originalPrice}>${product.originalPrice}</p>
          )}
        </div>
        {product.offer && (
          <p className={styles.offer}>Limited Time Offer Until {product.offerEndDate}</p>
        )}
      </div>
    </div>
  );
};

export default FavoritedCard;
