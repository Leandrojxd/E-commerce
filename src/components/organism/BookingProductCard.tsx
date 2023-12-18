import CustomImage from "../atoms/CustomImage"
import styles from 'public/home.module.css'
import AllInformationReserveProduct from "./AllInformationReserveProduct"

function BookingProductCard() {
  return (
    <div className={styles.booking_productcard_position}>
        <div className={styles.booking_product_image_style}>
            <CustomImage src='/assets/ProductImage.png' alt='ProductImage' width={112} height={111} className={styles.booking_product_img} />
        </div>
        <AllInformationReserveProduct/>
    </div>
  )
}

export default BookingProductCard