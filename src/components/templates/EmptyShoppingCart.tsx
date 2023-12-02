import React from 'react'
import CustomButton from '../atoms/CustomButton'
import styles from 'public/home.module.css'
import CustomText from '../atoms/CustomText'
import TopBarHeader from '../organism/TopBarHeader'

function EmptyShoppingCart() {
  return (
    <>
        <TopBarHeader/>
        <div className={styles.empty_shopping_cart_position}>
            <CustomText content='Aun no has agregado nada a tu carrito.' customClassName={styles.empty_message_text_style}/>
            <CustomButton 
            content={'LLEVAME A LOS PRODUCTOS'} 
            styleButton={styles.button_shopping_cart_empty_style}
            styleText={styles.back_button_text_style} 
            itemButtonDisplay={styles.back_products_button_position}/>

        </div>
    </>

  )
}

export default EmptyShoppingCart