import CustomImage from "../atoms/CustomImage"
import styles from 'public/home.module.css'

function BookingProductCard() {
  return (
    <div>
        <div className={styles.booking_product_image_style}>
            <CustomImage src='/assets/ProductImage.png' alt='ProductImage' className={styles.booking_product_img} />
        </div>
        <p>CILINDRO DE ALUMINIO DE 1M3</p>
        <p>INEGAR</p>
        <p>$us 25.00</p>
    </div>
  )
}

export default BookingProductCard