import React from 'react'
import CustomImage from '../atoms/CustomImage';
import CustomText from '../atoms/CustomText';
import styles from 'public/home.module.css';

function BusinessLogoName() {
  return (
    <div className={styles.logoName_styleFlex}>
        <CustomImage src="/assets/LogoSanJuan.png" alt="SanJuanLogo" className={styles.logo_style} />
        <CustomText content={'SanJuan'} customClassName={styles.style_header_text}/>
    </div>
  )
}

export default BusinessLogoName