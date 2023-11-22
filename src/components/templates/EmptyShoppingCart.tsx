import React from 'react'
import CustomButton from '../atoms/CustomButton'
import styles from 'public/home.module.css'

function EmptyShoppingCart() {
  return (
    <div>
        <CustomButton content={'LLEVAME A LOS PRODUCTOS'} styleButton={styles.button_shopping_cart_empty_style} styleText={styles.back_button_text_style} />
    </div>
  )
}

export default EmptyShoppingCart