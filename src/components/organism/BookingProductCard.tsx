import CustomButton from "../atoms/CustomButton"
import CustomImage from "../atoms/CustomImage"
import styles from 'public/home.module.css'

function BookingProductCard() {
  return (
    <div className={styles.booking_productcard_position}>
        <div className={styles.booking_product_image_style}>
            <CustomImage src='/assets/ProductImage.png' alt='ProductImage' width={112} height={111} className={styles.booking_product_img} />
        </div>
        <div className={styles.allinfo_section_position}>
          <div>
            <p className={styles.title_card}>CILINDRO DE ALUMINIO DE 1M3</p>
          </div>
          
          <div className={styles.info_reserve_position}>
            <p className={styles.brand_card}>INEGAR</p>
            <p className={styles.description_card}>$us 25.00</p>
          </div>
          <div className={styles.plusminus_reserve_section}>
            <CustomButton content="-" styleText={styles.description_card} styleButton={styles.plusminus_button_style}/>
            <p className={styles.title_card}>10</p>
            <CustomButton content="+" styleText={styles.description_card} styleButton={styles.plusminus_button_style} />
          </div>
        </div>


    </div>
  )
}

export default BookingProductCard