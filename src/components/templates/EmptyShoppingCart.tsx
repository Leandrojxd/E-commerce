import React from 'react'
import CustomButton from '../atoms/CustomButton'
import styles from 'public/home.module.css'
import CustomText from '../atoms/CustomText'

function EmptyShoppingCart() {
  return (
    <div className={styles.empty_shopping_cart_position}>
        <CustomText content='Aun no has agregado nada a tu carrito.' customClassName={styles.empty_message_text_style}/>
        <CustomButton 
        content={'LLEVAME A LOS PRODUCTOS'} 
        styleButton={styles.button_shopping_cart_empty_style}
         styleText={styles.back_button_text_style} />

    </div>
  )
}

export default EmptyShoppingCart