// HomePage.jsx

import React from 'react'
import styles from './HomePage.module.scss'
import Carousel from '../../components/Carousel/Carousel'
import ProductContainer from '../../containers/ProductContainer/ProductContainer'
import ProductsAll from '../../components/ProductsAll/ProductsAll'

const HomePage = () => {

  const slides = [
    <img src="https://cdn.discordapp.com/attachments/1226845849665929309/1241256762795888761/cyberforge1_a_plain_navy_background_f48a08be-29ce-499a-bd53-045e54ab7de8.png?ex=664adb71&is=664989f1&hm=2bb41895250aae727d6f7df48506d464f583cf4b0397b9de0dc1809bc09134fd&" alt="Slide 1" />,
    <img src="https://cdn.discordapp.com/attachments/1226845849665929309/1241256638816587856/cyberforge1_a_magenta_background_b10b9138-816b-421a-9bb1-f6c4e6ceb4cc.png?ex=664adb54&is=664989d4&hm=75e8f656410a69d0d48209072738aab828674c794015911fd98707a9a6ee1170&" alt="Slide 2" />,
    <img src="https://cdn.discordapp.com/attachments/1226845849665929309/1241256695599206472/cyberforge1_a_purple_background_7e596045-877f-4d05-a206-13e763e691c6.png?ex=664adb61&is=664989e1&hm=048899456b49bbd341c13a70bb9729a02e812f2e59ece89ef8ca8fa52c284ce7&" alt="Slide 3" />
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