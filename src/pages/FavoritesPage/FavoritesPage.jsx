
// FavoritesPage.jsx

import React, { useState, useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import FavoritedCard from '../../components/FavoritedCard/FavoritedCard'; // Import the FavoritedCard component
import { getAllProducts } from '../../services/firebase-service';

const FavoritesPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                console.log('Initial load of products', data); // Log the initial data
                const favoritedProducts = data.filter(product => product.favorited);
                console.log('Filtered favorited products', favoritedProducts); // Log the filtered products
                setProducts(favoritedProducts);
            })
            .catch((e) => console.warn(e.message));
    }, []);

    const handleFavoriteToggle = (productId, isFavorited) => {
        console.log(`Favorite status changed for ${productId}: ${isFavorited}`);
        setProducts(currentProducts =>
            currentProducts.map(product => 
                product.id === productId ? { ...product, favorited: isFavorited } : product
            ).filter(product => product.favorited)
        );
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Favorited Products</h1>
            <div className={styles.container}>
                {products.length === 0 ? (
                    <div className={styles.emptyWishlist}>
                        <p className={styles.itemCount}>0 Item(s)</p>
                        <h2 className={styles.emptyTitle}>YOUR WISH LIST HAS NO ITEMS.</h2>
                        <p className={styles.description}>Press the heart mark to add items to your wish list.</p>
                    </div>
                ) : (
                    <div className={styles.contents}>
                        {products.map((product) => (
                            <FavoritedCard 
                                key={product.id} 
                                product={product} 
                                onFavoriteToggle={() => handleFavoriteToggle(product.id, !product.favorited)} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
