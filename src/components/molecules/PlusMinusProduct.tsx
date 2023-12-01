import React from 'react'
import CustomButton from '../atoms/CustomButton'
import styles from 'public/home.module.css'

function PlusMinusProduct() {
  return (
    <div className={styles.plusminus_product_section}>
        <CustomButton content='-' styleText={styles.plusminus_button_text_style} styleButton={styles.plusminus_button_style} itemButtonDisplay={styles.plusminus_button_text_position}/>
        <p className={styles.plusminus_section_text_style}> 0 </p>
        <CustomButton content='+' styleText={styles.plusminus_button_text_style} styleButton={styles.plusminus_button_style} itemButtonDisplay={styles.plusminus_button_text_position}/>
    </div>
  )
}

export default PlusMinusProduct