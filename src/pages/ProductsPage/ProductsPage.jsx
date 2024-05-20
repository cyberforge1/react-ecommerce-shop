// ProductsPage.jsx

import React from 'react';
import styles from './ProductsPage.module.scss';
import ProductContainer from '../../containers/ProductContainer/ProductContainer';
import ProductsAll from '../../components/ProductsAll/ProductsAll';
import FeaturedProductsCarousel from '../../components/FeaturedProductsCarousel/FeaturedProductsCarousel'; // Import the new component

const ProductsPage = () => {
  return (
    <>
      <FeaturedProductsCarousel /> {/* Add the carousel here */}
      <ProductContainer>
        <ProductsAll />
      </ProductContainer>
    </>
  );
};

export default ProductsPage;
