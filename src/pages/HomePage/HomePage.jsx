// HomePage.jsx

import React from 'react'
import styles from './HomePage.module.scss'
import Carousel from '../../components/Carousel/Carousel'
import ProductContainer from '../../containers/ProductContainer/ProductContainer'
import ProductsAll from '../../components/ProductsAll/ProductsAll'

const HomePage = () => {

  const slides = [
    <img src="https://cdn.discordapp.com/attachments/1226845849665929309/1241256695599206472/cyberforge1_a_purple_background_7e596045-877f-4d05-a206-13e763e691c6.png?ex=664989e1&is=66483861&hm=e65a890f078431ff8641294f656ffa607dc94f64433f4895558b802c6a86988d&" alt="Slide 1" />,
    <img src="https://cdn.discordapp.com/attachments/1226845849665929309/1241256762795888761/cyberforge1_a_plain_navy_background_f48a08be-29ce-499a-bd53-045e54ab7de8.png?ex=664989f1&is=66483871&hm=40062f203ff41657f182b9236d6a4f0bbfcde7d5b4ade2427643c1640d0176da&" alt="Slide 2" />,
    <img src="https://cdn.discordapp.com/attachments/1226845849665929309/1241256638816587856/cyberforge1_a_magenta_background_b10b9138-816b-421a-9bb1-f6c4e6ceb4cc.png?ex=664989d4&is=66483854&hm=05bcd4cc249a0dd681b5b1e554f0f4566d2011f4cb5d40786a182dadbc083160&" alt="Slide 3" />
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