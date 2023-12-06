import CustomImage from '../atoms/CustomImage'
import styles from 'public/home.module.css'

function SingleProductImage() {
  return (
    <div className={styles.single_product_image_container_style}>
        <CustomImage src='/assets/ProductImage.png' width={112} height={111} alt='ProductImage' className=''/>
    </div>
  )
}

export default SingleProductImage