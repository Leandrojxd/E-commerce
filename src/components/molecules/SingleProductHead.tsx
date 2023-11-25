import CustomImage from '../atoms/CustomImage'
import styles from 'public/home.module.css'

function SingleProductHead() {
  return (
    <div className={styles.single_product_image_container_style}>
        <CustomImage src='/assets/ProductImage.png' alt='ProductImage' className=''/>
    </div>
  )
}

export default SingleProductHead