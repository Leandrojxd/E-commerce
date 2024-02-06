import CustomButton from '../atoms/CustomButton'
import styles from 'public/home.module.css'
import Link from "next/link"

function ShoppingBagFooter({contextButtonShoppingBag}:{contextButtonShoppingBag:string} ) {
  return (
    <div className={styles.shopping_bag_footer_style}>
        <div className={styles.state_shopping_bag_footer_position}>
            <p className={styles.text_style_white5}>Compra total</p>
            <p className={styles.text_style_white7_heading}>$us 0.00</p>
        </div>
        <Link href={`./ShoppingCart`}>
          <CustomButton 
          content={contextButtonShoppingBag} 
          styleButton={styles.button_style3} 
          styleText={styles.text_style_white} 
          imagePath='/assets/shopping-bag.png' 
          imgAlt='shoppingBagIcon'
          itemButtonDisplay={styles.button_style3_position}
          />
        </Link>

    </div>
  )
}

export default ShoppingBagFooter