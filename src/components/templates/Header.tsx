import React from 'react'
import TopBarHeader from '../organism/TopBarHeader'
import CustomImage from '../atoms/CustomImage'
import Search from '../organism/Search'
import styles from 'public/home.module.css'

function Header() {
  return (
    <div className={styles.Header}>
        <TopBarHeader/>
        <CustomImage src='/assets/Promo.png' alt="Promo.png" width={348} height={146} className={styles.promo_style}/>
        <Search />
    </div>
  )
}

export default Header