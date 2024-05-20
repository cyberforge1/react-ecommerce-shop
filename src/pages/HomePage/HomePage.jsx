// HomePage.jsx

import React from 'react'
import styles from './HomePage.module.scss'
import Carousel from '../../components/Carousel/Carousel'
import ProductContainer from '../../containers/ProductContainer/ProductContainer'
import ProductsAll from '../../components/ProductsAll/ProductsAll'

import image1 from '/background-1.png'
import image2 from '/background-2.png'
import image3 from '/background-3.png'

const HomePage = () => {

  const slides = [
    <img src={image1} alt="Slide 1" />,
    <img src={image2} alt="Slide 2" />,
    <img src={image3} alt="Slide 3" />
  ];

  return (
    <div className={styles.homepage}>
      <Carousel slides={slides} />
      <ProductContainer>
        <ProductsAll />
      </ProductContainer>
    </div>
  )
}

export default HomePage