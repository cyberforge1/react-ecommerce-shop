// SingleProduct.jsx


import React, { useState } from 'react';
import styles from './SingleProduct.module.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const SingleProduct = ({ product, onFavoriteToggle }) => {
    if (!product) {
        return <div>Loading...</div>;
    }

    const {
        name = 'Product Name',
        imageUrl = '',
        price = 0,
        oldPrice = 0,
        promoEndDate = 'N/A',
        storeInfo = '',
        quantity = 0,
        colors = [],
        sizes = [],
        selectedColor = '',
        selectedSize = ''
    } = product;

    const [quantityState, setQuantityState] = useState(quantity);

    const handleDecreaseQuantity = () => {
        if (quantityState > 0) {
            setQuantityState(quantityState - 1);
        }
    };

    const handleVariantChange = (event) => {
        console.log("Selected Variant:", event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imgCard}>
                <img src={imageUrl} alt={name} className={styles.imageStyle} />
            </div>
            <div className={styles.textCard}>
                <h2>{name}</h2>
                <p className={styles.oldPrice}>${oldPrice.toFixed(2)}</p>
                <p className={styles.newPrice}>${price.toFixed(2)}</p>
                <p className={styles.promo}>Limited Time Offer Until {promoEndDate}</p>
                <p>{storeInfo}</p>
                <div className={styles.colorOptions}>
                    <p>Colour: {selectedColor}</p>
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className={styles.colorBox}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                            onClick={() => console.log(`Selected color: ${color.name}`)}
                        />
                    ))}
                </div>
                <div className={styles.sizeOptions}>
                    <p>Size: Unisex {selectedSize}</p>
                    <div className={styles.sizeButtons}>
                        {sizes.map((size, index) => (
                            <button key={index} className={styles.sizeButton}>
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.quantity}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantityState}
                        onChange={(e) => setQuantityState(parseInt(e.target.value))}
                        min="0"
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} />
                    <AddToCartButton productId={product.id} onDecreaseQuantity={handleDecreaseQuantity} />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
