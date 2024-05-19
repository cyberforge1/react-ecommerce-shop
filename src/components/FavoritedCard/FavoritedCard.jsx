// FavoritedCard.jsx

import React from 'react';
import styles from './FavoritedCard.module.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const FavoritedCard = ({ product, onFavoriteToggle }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
      <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} className={styles.favoriteButton} />
        <img src={product.imageUrl} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.productId}>Product ID: {product.id}</p>
        <p className={styles.color}>Colour: {product.color}</p>
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
