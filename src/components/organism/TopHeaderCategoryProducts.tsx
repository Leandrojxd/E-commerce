import React from 'react'
import styles from 'public/home.module.css'

import CustomButton from '../atoms/CustomButton'
import CustomText from '../atoms/CustomText'
function TopHeaderCategoryProducts() {
  return (
    <div className={styles.header_category_products_position}>
        <CustomButton content='atras' styleButton={styles.button_style2} styleText={styles.button_text_style2}/>
        <CustomText content={'GENERADORES DE GASOLINA'} customClassName={styles.outfit_style_text_800}/>
    </div>
  )
}

export default TopHeaderCategoryProducts