import React from 'react'
import TopBarHeader from '../organism/TopBarHeader'
import CustomImage from '../atoms/CustomImage'
import Search from '../organism/Search'
import styles from 'public/home.module.css'
import { getImageByName } from '@/pages/api/Services'

async function Header() {
  const imgPromo = await getImageByName("OtherAssets","Promo.png");
  console.log(imgPromo)
  return (
    <div className={styles.Header}>
        <TopBarHeader/>
        <CustomImage src={imgPromo} alt="Promo.png" width={348} height={146} className={styles.promo_style}/>
        <Search />
    </div>
  )
}

export default Header